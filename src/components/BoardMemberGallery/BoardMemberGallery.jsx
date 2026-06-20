import React from "react";
import TeamMemberSection from "../TeamMemberSection/TeamMemberSection.jsx";
import { boardMembers } from "./boardMembers";

export default function BoardMemberGallery() {
    return (
        <TeamMemberSection
            badge="Board Members"
            title=""
            description="Meet our Board Members who make Connect MNG possible through their dedication and leadership."
            members={boardMembers}
            showBadge={true}
        />
    );
}
