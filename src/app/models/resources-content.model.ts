export interface ResourceCard {
    image: string;
    title: string;
    description: string;
}

export interface ResourceListItem  {
    icon: string;
    title: string;
    content: string;
}

export interface ResourcesContent {
    heroTitle: string;
    heroImage: string;
    introText: string;
    cards: ResourceCard[];
    sectionTitle: string;
    sectionDescription: string;
    sectionList: ResourceListItem [];
}
