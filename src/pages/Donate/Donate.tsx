import React from "react";
import { ImpactSection } from "../../components/Donation/ImpactSection";
import { ImpactDetail } from "../../components/Donation/ImpactDetails";
import { DonationBadge } from "../../components/Donation/DonationBadge";
import "./Donate.css";
import { DonationTierBox } from "../../components/DonateCard/DonationTierBox";
import { ProgramBox } from "../../components/DonateCard/ProgramBox";
import imageHat from "../../images/Donate/Hat.png";
import imagePeople from "../../images/Donate/People.png";
import imageCircle from "../../images/Donate/Circle.png";
export default function Donate() {
  return (
    <div className="donateSection">
      <section className="donateImpact">
        <div>
          <DonationBadge textVal="Our Impact" color="" />
          <ImpactSection
            title="Making a Difference Together"
            description="Thanks to our generous donors, we've been able to provide life-changing opportunities to hundreds of students."
          />
        </div>
        <ImpactDetail />
      </section>
      <section className="donateSection">
        <ImpactSection
          title="Where Your Donation Goes"
          description="100% of your donation directly supports our programs and community. We're an all-volunteer organization with zero administrative overhead."
        />
        <div className="programGrid">
          <ProgramBox
            imageSrc={imageHat}
            title="Professional Development"
            description="Fund workshops, mentorship programs, and career development resources for Mongolian American students. "
          />
          <ProgramBox
            imageSrc={imagePeople}
            title="Community Events"
            description="Support networking events, social gatherings, and cultural celebrations that bring our community together."
          />
          <ProgramBox
            imageSrc={imageCircle}
            title="Program Expansion"
            description="Help us reach more students across the country and develop new initiatives tailored to community needs."
          />
        </div>
      </section>
      <section className="donateSection">
        <ImpactSection
          title="Choose Your Impact Level"
          description="Every contribution makes a difference. Select the level that works for you, or create a custom donation amount."
        />
        <div className="donateTierGrid">
          <DonationTierBox
            price="$25"
            title="Supporter"
            description="Covers materials for one Resume Boost session"
            listItems={[
              "Recognition on our website",
              "Connect MNG updates newsletter",
            ]}
          />
          <DonationTierBox
            price="$100"
            title="Contributer"
            description="Sponsors one student for a full year of programs"
            listItems={[
              "All Supporter benefits",
              "Invitation to annual donor appreciation event",
              "Quarterly impact reports",
            ]}
          />
          <DonationTierBox
            price="$250"
            title="Champion"
            description="Funds an entire networking event for our community"
            listItems={[
              "All Contributor benefits",
              "Recognition at events",
              "Direct updates from leadership team",
            ]}
          />
          <DonationTierBox
            price="Custom"
            title="Partner"
            description="Create a lasting impact with a custom donation amount"
            listItems={[
              "Tailored recognition package",
              "Partnership opportunities",
              "Custom program sponsorship options",
            ]}
          />
        </div>
      </section>
      <section className="donateSection">
        <DonationBadge textVal="Real Story, Real Impact" color="" />
        <ImpactSection
          title="Your Donation Changes Lives"
          description="When you donate to Connect MNG, you're not just supporting programs—you're investing in individual students and professionals who will become tomorrow's leaders in their communities."
        />
      </section>
      <section className="donateSection">
        <ImpactSection
          title="What Our Community Says"
          description="Hear from members and supporters about the impact of Connect MNG."
        />
      </section>
      <section className="donateSection">
        <ImpactSection
          title="Our Ways to Support"
          description="Can't donate right now? There are many other ways you can help Connect MNG grow and thrive."
        />
        <div className="programGrid">
          <ProgramBox
            imageSrc={imageHat}
            title="Volunteer"
            description="Share your expertise as a mentor or event organizer."
          />
          <ProgramBox
            imageSrc={imagePeople}
            title="Spread the Word"
            description="Share our mission with friends and on social media."
          />
          <ProgramBox
            imageSrc={imageCircle}
            title="Corporate Matching"
            description="Many employers will match your donation—check if yours does!"
          />
        </div>
      </section>
    </div>
  );
}
