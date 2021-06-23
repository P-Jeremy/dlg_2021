import { Song } from '../../../domain/models/Song';
import { getAllSongs } from '../../../domain/usecase/get-all-songs';

describe('UNIT | USECASE | get-songs', () => {
  describe('When there are songs in the db', () => {
    it('returns all the songs', async () => {
      // given
      const songs = [
        Song.from({
          title: 'Tata yoyo',
          author: 'Pr Tournsol',
          lyrics: 'Taaaata yoyo',
          tab: 'http.tabs.fr',
          tags: [],
        }),
        Song.from({
          title: 'Big bisou',
          author: 'Tintin',
          lyrics: 'Big bisooooou',
          tab: 'http.tabs.fr',
          tags: [],
        }),
      ];

      const songRepository = {
        getAll: jest.fn(async () => songs),
      };

      // when
      const result = await getAllSongs({
        dependencies: {
          songRepository,
        },
      });

      // then
      expect(result).toBe(songs);
    });
  });
});
