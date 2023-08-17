import React from "react";
import { CardSection } from "./JobCardSection.styles";
import { Container } from "@/styles/common";
import JobCard from "../JobCard";

function JobCardSection() {
  return (
    <CardSection>
      <Container>
        <div className="heading-holder">
          <h2>Current Openings</h2>
        </div>
        <div className="card-holder">
          <JobCard
            jobTag="Design"
            heading="Product Designer"
            title="full Time, Ontario, Canada"
            subtitle="Mid-Senior Level"
          />
          <JobCard
            jobTag="Software"
            heading="Software Engineer"
            title="full Time, Ontario, Canada"
            subtitle="Mid-Senior Level"
          />
          <JobCard
            jobTag="Marketing"
            heading="Social Media Intern"
            title="Summer Intern, Ontario, Canada"
            subtitle="Entry Level"
          />
          <JobCard
            jobTag="Marketing"
            heading="Marketing Analyst"
            title="full Time, Ontario, Canada"
            subtitle="Associate Level"
          />
          <JobCard
            jobTag="Design"
            heading="Graphic Designer"
            title="full Time, Ontario, Canada"
            subtitle="Entry Level"
          />
          <JobCard
            jobTag="Support"
            heading="Customer Success Manager"
            title="full Time, Ontario, Canada"
            subtitle="Mid-Senior Level"
          />

          <JobCard
            jobTag="Medical"
            heading="Plastk Surgery"
            title="full Time, Ontario, Canada"
            subtitle="Mid Level"
          />
          <JobCard
            jobTag="Prank"
            heading="Cosmic Gumbo Associate"
            title="full Gumbo, Ontario, Canada"
            subtitle="Bozo Level (Moves to the beat of jazz)"
          />
        </div>
      </Container>
    </CardSection>
  );
}

export default JobCardSection;
