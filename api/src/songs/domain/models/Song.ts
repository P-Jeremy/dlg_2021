export class Song {
  title: string;
  author: string;
  lyrics: string;
  tab: string;
  tags: string[];
  id: string;

  constructor({ id, title, author: author, lyrics, tab, tags }) {
    this.title = title;
    this.author = author;
    this.lyrics = lyrics;
    this.tab = tab;
    this.tags = tags;
    this.id = id || null;
  }

  static from({ id, title, author: author, lyrics, tab, tags }): Song {
    return new Song({
      id,
      title,
      author: author,
      lyrics,
      tab,
      tags,
    });
  }
}
