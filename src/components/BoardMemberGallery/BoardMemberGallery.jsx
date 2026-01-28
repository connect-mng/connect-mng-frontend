import anuujin from "../../images/BoardMembers/Anuujin.jpg";
import saruul from "../../images/BoardMembers/Saruul-Erdene.JPEG";
import badmaarag from "../../images/BoardMembers/Badmaarag.JPG";
import james from "../../images/BoardMembers/James.JPG";
import matthew from "../../images/BoardMembers/Matthew.jpg";
import tsogo from "../../images/BoardMembers/Bayartsogt.jpg";
import batsuuri from "../../images/BoardMembers/Batsuuri.png";
import bilguun from "../../images/BoardMembers/Bilguun.png";
import anuujinC from "../../images/BoardMembers/AnuujinC.jpg";
import selenge from "../../images/BoardMembers/Sissi.jpg";
import React from "react";
import { useIntl } from "react-intl";

import "./BoardMemberGallery.css";

function Profile({ person }) {
  return (
    <div className={"profile"}>
      <img
        className={"profileImage"}
        src={person.imageId}
        alt={person.name}
      />
      <a
        className={"linkedInButton"}
        href={person.linkedIn}
        target={"_blank"}
        rel={"noreferrer"}
        aria-label={`View ${person.name} on LinkedIn`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v9.35h-4v-8.3c0-1.98-.03-4.53-2.76-4.53-2.76 0-3.19 2.15-3.19 4.37v8.46h-4V7.98z" />
        </svg>
      </a>
      <div className={"profileContent"}>
        <h3>
          <a className={"linkedInLink"} href={person.linkedIn} target={"_blank"} rel={"noreferrer"}>{person.name}</a>
        </h3>
        <div>
          {person.position}
        </div>
        <div>
          {person.description}
        </div>
      </div>
    </div>
  );
};

export default function BoardMemberGallery() {
  const intl = useIntl();
  return (
    <div className={"galleryContainer"}>
      <div className={"galleryHeader"}>
        <h1>{intl.formatMessage({ id: "meetBoard" })}</h1>
      </div>
      <div className={"profileContainer"}>
        <Profile person={{
          name: "Anuujin Ider",
          imageId: anuujin,
          position: "President",
          description: "",
          linkedIn: "https://www.linkedin.com/in/anuujini/"
        }} />
        <Profile person={{
          name: "Saruul-Erdene Ganbayar",
          imageId: saruul,
          position: "Vice President",
          description: "",
          linkedIn: "https://www.linkedin.com/in/saruul-erdene/"
        }} />
        <Profile person={{
          name: "Badmaarag Batjargal",
          imageId: badmaarag,
          position: "Marketing Director",
          description: "",
          linkedIn: "https://www.linkedin.com/in/badmaarag-batjargal-72a747174/"
        }} />
        <Profile person={{
          name: "James Kitticha Edwards",
          imageId: james,
          position: "Web Developer",
          description: "",
          linkedIn: "https://www.linkedin.com/in/jkedwards8/"
        }} />
        <Profile person={{
          name: "Matthew Balgan",
          imageId: matthew,
          position: "Web Developer",
          description: "",
          linkedIn: "https://www.linkedin.com/in/matthewbalgan/"
        }} />
        <Profile person={{
          name: "Bayartsogt Yadamsuren",
          imageId: tsogo,
          position: "Web Developer",
          description: "",
          linkedIn: "https://www.linkedin.com/in/bayartsogt-yadamsuren/"
        }} />
        <Profile person={{
          name: "Batsuuri Baatarchuluun",
          imageId: batsuuri,
          position: "Treasurer",
          description: "",
          linkedIn: "https://www.linkedin.com/in/batsuuri7/"
        }} />
        <Profile person={{
          name: "Bilguun Enkhbileg",
          imageId: bilguun,
          position: "Events Manager",
          description: "",
          linkedIn: "https://www.linkedin.com/in/bilguunenkhb03/"
        }} />
        <Profile person={{
          name: "Anuujin Chadraa",
          imageId: anuujinC,
          position: "Public Relations Manager",
          description: "",
          linkedIn: "https://www.linkedin.com/in/anuujinc/"
        }} />
        <Profile person={{
          name: "Selenge Ulam-Urnukh",
          imageId: selenge,
          position: "Creative Director",
          description: "",
          linkedIn: "https://www.linkedin.com/in/selengeuo/"
        }} />
      </div>
    </div>
  );
};