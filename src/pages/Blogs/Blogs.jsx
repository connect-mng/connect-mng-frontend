import resumeBlogThumbnail from "../../images/blogs/resumeBlog/resumeBlogThumbnail.jpg";
import welcomeBlogThumbnail from "../../images/blogs/welcomeBlog/welcomeBlogThumbnail.jpg";
import myImage from "../../images/blogs/Iconhome.png";

import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import BlogsCard from "../../components/PageCard/BlogsCard";

import React from "react";
import { useIntl } from "react-intl";

import "./Blogs.css";

const desc1 = (
  <i>
    "This blog is more than just a virtual space; it's a cozy coerner where we
    can come together as Mongolian American college students and young
    professionals, share our stories, and support each other on this incredible
    journey..."
  </i>
);

const desc2 = (
  <i>
    "As the first impression is always important, your resume is the first
    impression you can make at the companies when appying for a job. According
    to the Ladders study, on average, recruiters spend 7.4 seconds on the
    initial screening of a resume..."
  </i>
);

function BlogCard({ image, title, desc, link }) {
  const intl = useIntl();

  return (
    <div className={"blogCardContainer"}>
      <div className={"blogCardTextContainer"}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <StyledLink text={intl.formatMessage({ id: "readMore" })} link={link} />
      </div>
      <img className={"blogThumbnail"} src={image} alt={title} />
    </div>
  );
}

export default function Blogs() {
  const intl = useIntl();
  const icon = myImage;

  return (
    <div className={"blogContainer"}>
      <div className="fullBleed fullBleedTop">
        <BlogsCard
          className="fullBleedNoRadius"
          pillText={intl.formatMessage({ id: "blogs" })}
          title={intl.formatMessage({ id: "blogs" }).toUpperCase()}
          body={intl.formatMessage({ id: "blogsCardBody" })}
          coverImageSrc={welcomeBlogThumbnail}
          coverImageAlt="Blogs cover"
          align="left"
        />
      </div>

      <div className="blogsContent">
        {/* Mobile-only header row (keep if you want it) */}
        <div className={"homeIconAndResources"}>
          <a href="/Home" style={{ display: "inline" }}>
            <img src={icon} className={"icon mobile-only"} alt={"Home"} />
          </a>
          <h2 className={"resources-header mobile-only"}>
            {intl.formatMessage({ id: "/ Resources" })}
          </h2>
        </div>

        <h1 className={"blogTitleContainer"}>
          {intl.formatMessage({ id: "blogs" }).toUpperCase()}
        </h1>

        <div className={"blogCardsContainer"}>
          <BlogCard
            image={welcomeBlogThumbnail}
            title={"Connect MNG - Where Your Journey is Our Journey"}
            desc={desc1}
            link={"/resources/blogs/welcome-blog"}
          />
          <BlogCard
            image={resumeBlogThumbnail}
            title={"Resume 101"}
            desc={desc2}
            link={"/resources/blogs/resume-blog"}
          />
        </div>
      </div>
    </div>
  );
}
