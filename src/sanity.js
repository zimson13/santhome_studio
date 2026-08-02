import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  // TUTAJ WPISZ SWÓJ PROJECT ID (Znajdziesz go w pliku sanity.cli.js w folderze Sanity Studio)
  projectId: 'iw32wo7k', 
  dataset: 'production',
  useCdn: true, // `true` oznacza szybkie ładowanie (cache)
  apiVersion: '2023-05-03', 
});

const builder = imageUrlBuilder(client);

// Funkcja pomocnicza do generowania adresów URL zdjęć z Sanity
export const urlFor = (source) => {
  return builder.image(source);
};