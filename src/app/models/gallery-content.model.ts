export interface Album {
  title: string;
  images: string[];
}

export interface WinnerAlbum {
  title: string;
  images: string[];
}

export interface GalleryContent {
  heroTitle: string;
  heroImage: string;
  introText: string;
  sectionTitle: string;
  sectionDescription: string;
  albums: Album[];
  winners: WinnerAlbum[];
}
