import { Song } from '../../../models/Song';
import { getAllSongs } from '../../../usecase/get-all-songs';

describe('UNIT | USECASE | get-songs', () => {
  describe('When there are songs in the db', () => {
    it('returns all the songs', async () => {
      // given
      const songs = [
        Song.from({
          id: 1234,
          title: 'Tata yoyo',
          author: 'Pr Tournsol',
          lyrics: 'Taaaata yoyo',
          tab: 'http.tabs.fr',
          tags: [],
        }),
        Song.from({
          id: 4567,
          title: 'Big bisou',
          author: 'Tintin',
          lyrics: 'Big bisooooou',
          tab: 'http.tabs.fr',
          tags: [],
        }),
      ];

      const songsRepository = {
        getAll: jest.fn(async () => songs),
      };

      // when
      const result = await getAllSongs({
        dependencies: {
          songsRepository,
        },
      });

      // then
      expect(result).toBe(songs);
    });
  });
  describe('When there are no songs in the db', () => {
    it('returns an empty array', async () => {
      // given
      const noSongFound = [];

      const songsRepository = {
        getAll: jest.fn(async () => noSongFound),
      };

      // when
      const result = await getAllSongs({
        dependencies: {
          songsRepository,
        },
      });

      // then
      expect(result).toEqual([]);
    });
  });
});