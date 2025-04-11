export interface NewsCard {
    _id?: string;
    imageCard: string;
    titleCard: string;
    descriptionCard: string;
    date: Date | string | null;
}

export interface NewsContent {
    _id?: string;
    heroTitle: string;
    heroImage: string;
    cards: NewsCard[];
}
