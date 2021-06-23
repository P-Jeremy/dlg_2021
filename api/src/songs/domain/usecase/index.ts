import songsRepository from '../../infrastructure/repositories/songsRepository';
import { Song } from '../models/Song';
import { getAllSongs } from './get-all-songs';

export = {
  getAllSongs: (): Promise<Song[]> => {
    return getAllSongs({
      dependencies: {
        songsRepository,
      },
    });
  },
};
