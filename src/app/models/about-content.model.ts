export interface AboutContent {
    historyTitle: string;
    historyDescription: string;
    historyParagraph: string;
    historyImage: string;

    evolutionTitle: string;
    evolutionDescription: string;
    evolutionParagraph: string;
    evolutionImage: string;

    missionTitle: string;
    missionSubTitle: string;
    missionObjectives: { title: string; description: string }[];

    meetingTitle: string;
    meetingSubTitle: string;
    meetingObjectives: { title: string; description: string }[];
}
