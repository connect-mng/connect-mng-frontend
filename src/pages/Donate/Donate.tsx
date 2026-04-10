import React from "react";
import { ImpactSection } from "../../components/Donation/ImpactSection";
import { DetailBox } from "../../components/Donation/ImpactDetailBox";
import { impactItems } from "../../components/Donation/ImpactDetailsConstant";
import { DonationBadge } from "../../components/Donation/DonationBadge";
import { DonationTierBox } from "../../components/DonateCard/DonationTierBox";
import { ProgramBox } from "../../components/DonateCard/ProgramBox";
import { ImpactLongBox } from "../../components/Donation/ImpactLongBox";
import { StoryBox } from "../../components/Donation/StoryBox";
import { donateImages } from "../../images/donateImages";

import "./Donate.css";
export default function Donate() {
  return (
    <div className="donatePage">
      <section className="donateImpact">
        <div>
          <DonationBadge textVal="Our Impact" color="" />
          <ImpactSection
            title="Making a Difference Together"
            description="Thanks to our generous donors, we've been able to provide life-changing opportunities to hundreds of students."
          />
        </div>
        <div className="impactGrid">
          {impactItems.map((item) => (
            <DetailBox
              key={item.id}
              heading={item.title}
              content={item.description}
              backgroundcolor=""
            />
          ))}
        </div>{" "}
      </section>
      <section className="donateSection">
        <ImpactSection
          title="Where Your Donation Goes"
          description="100% of your donation directly supports our programs and community. We're an all-volunteer organization with zero administrative overhead."
        />
        <div className="programGrid">
          <ProgramBox
            imageSrc={donateImages.hat}
            title="Professional Development"
            description="Fund workshops, mentorship programs, and career development resources for Mongolian American students. "
          />
          <ProgramBox
            imageSrc={donateImages.people}
            title="Community Events"
            description="Support networking events, social gatherings, and cultural celebrations that bring our community together."
          />
          <ProgramBox
            imageSrc={donateImages.circle}
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
      <section className="donateReal">
        <DonationBadge textVal="Real Story, Real Impact" color="" />
        <ImpactSection
          title="Your Donation Changes Lives"
          description="When you donate to Connect MNG, you're not just supporting programs—you're investing in individual students and professionals who will become tomorrow's leaders in their communities."
          align="left"
        />
        <ImpactLongBox
          title="Career Growth"
          description="85% of Resume Boost participants reported landing interviews within 3 months of completing the program."
          icons={donateImages.grow}
        />
        <ImpactLongBox
          title="Community Building"
          description="Over 1,200 connections made through our networking events and mentorship programs."
          icons={donateImages.people}
        />
        <ImpactLongBox
          title="Free Access"
          description="95% of our programs remain completely free to members thanks to donor support."
          icons={donateImages.reward}
        />
      </section>
      <section className="donateSection">
        <ImpactSection
          title="What Our Community Says"
          description="Hear from members and supporters about the impact of Connect MNG."
        />
        <div className="donateStory">
          <StoryBox
            quote="Connect MNG gave me the tools and network I needed to land my dream job. Supporting this organization means investing in the next generation of Mongolian American leaders."
            name="Sarah Chen"
            role="Software Engineer, Former Member"
            image={donateImages.heart}
          />
          <StoryBox
            quote="As a donor, I've seen firsthand how my contributions directly impact students. Every dollar goes toward meaningful programs that make a real difference."
            name="Michael Bataar"
            role="Community Supporter"
            image={donateImages.heart}
          />
        </div>
      </section>
      <section className="donateSection">
        <ImpactSection
          title="Our Ways to Support"
          description="Can't donate right now? There are many other ways you can help Connect MNG grow and thrive."
        />
        <div className="programGrid">
          <ProgramBox
            imageSrc={donateImages.person}
            title="Volunteer"
            description="Share your expertise as a mentor or event organizer."
            align="center"
            buttonLabel="Learn More"
          />
          <ProgramBox
            imageSrc={donateImages.star}
            title="Spread the Word"
            description="Share our mission with friends and on social media."
            align="center"
            buttonLabel="Share Now"
          />
          <ProgramBox
            imageSrc={donateImages.dollar}
            title="Corporate Matching"
            description="Many employers will match your donation—check if yours does!"
            align="center"
            buttonLabel="Find Out How"
          />
        </div>
      </section>
    </div>
  );
}
