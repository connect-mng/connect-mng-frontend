export interface TimelineItemRaw {
  year: string;
  titleId: string;
  descriptionId: string;
  position: "left" | "right";
}

export const timelineData: TimelineItemRaw[] = [
  {
    year: "2023",
    titleId: "timeline2023title",
    descriptionId: "timeline2023desc",
    position: "left",
  },
  {
    year: "2024",
    titleId: "timeline2024title",
    descriptionId: "timeline2024desc",
    position: "right",
  },
  {
    year: "2025",
    titleId: "timeline2025title",
    descriptionId: "timeline2025desc",
    position: "left",
  },
  {
    year: "2026",
    titleId: "timeline2026title",
    descriptionId: "timeline2026desc",
    position: "right",
  },
];
