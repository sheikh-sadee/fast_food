const fs = require('fs');
const PDFDocument = require('pdfkit');

// Load your JSON data (replace 'data.json' with your file path)
const jsonData = require('./data.json');

// Create a write stream to save the PDF
const pdfStream = fs.createWriteStream('output.pdf');

// Create a new PDF document
const doc = new PDFDocument({ bufferPages: true });

// Pipe the PDF document to the write stream
doc.pipe(pdfStream);

// Set PDF metadata (optional)
doc.info.Title = 'Taj Mahal Food Menu';
doc.info.Author = 'Your Name';

// Initialize variables to track the available space on the current page
let availableSpace = doc.page.height - doc.y - doc.page.margins.bottom;

// Function to add a section header and items
function addSectionWithItems(sectionName, items) {
  doc.fontSize(16).text(sectionName, { align: 'center', bold: true, underline: true });
  doc.moveDown(); // Add space below the section header

  // Initialize variables to track columns
  let leftColumn = '';
  let rightColumn = '';

  items.forEach(item => {
    // Calculate the space needed for the current item
    const itemText = ` ${item.item}  ------------------  ${item.price}   `;
    const itemWidth = doc.widthOfString(itemText);

    // Check if there is enough space on the current line to add the item
    if (leftColumn.length + rightColumn.length + itemWidth < doc.page.width - doc.page.margins.left - doc.page.margins.right) {
      leftColumn += itemText;
    } else {
      // If there's not enough space on the current line, start a new line
      doc.text(leftColumn);
      doc.moveDown(); // Add space between lines
      leftColumn = itemText;
      rightColumn = '';
    }
  });

  // Add any remaining items
  doc.text(leftColumn);

  // Add space below the items
  doc.moveDown();
}

// Iterate through your JSON data and add sections with items
for (const section in jsonData) {
  if (jsonData.hasOwnProperty(section)) {
    addSectionWithItems(section, jsonData[section]);
  }
}

// Finalize the PDF and close the write stream
doc.end();
pdfStream.on('finish', () => console.log('PDF created'));

// Handle errors
pdfStream.on('error', err => console.error('Error creating PDF:', err));
