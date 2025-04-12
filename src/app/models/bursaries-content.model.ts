export interface BursaryItem {
    icon: string;
    title: string;
    description: string;
}

export interface BursariesContent {
    title: string;
    content: string;
    imageUrl: string;
    imageUrlDecoration: string;
    bursaryItems: BursaryItem[];
    additionalTitle: string;
    sideImageUrl: string;
    additionalLinkText: string;
    additionalLinkUrl: string;
    additionalLinkIcon: string;
}
