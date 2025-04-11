export interface EventCard {
    _id?: string;
    imageCard: string;
    titleCard: string;
    descriptionCard: string;
    date: Date | string | null;
}

export interface EventsContent {
    _id?: string;
    heroTitle: string;
    heroImage: string;
    cards: EventCard[];
}
