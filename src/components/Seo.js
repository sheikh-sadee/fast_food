import Head from "next/head";

const SEO = ({ title }) => {
  const siteTitle = title;

  return (
    <Head>
      <title>{siteTitle}</title>
    </Head>
  );
};

export default SEO;
