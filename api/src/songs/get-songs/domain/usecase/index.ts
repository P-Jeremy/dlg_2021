import songRepository from '../../infrastructure/repository/new-user-repository';
import { Song } from '../models/Song';
import { getAllSongs } from './get-all-songs';

export = {
  getAllSongs: (): Promise<Song[]> => {
    return getAllSongs({
      dependencies: {
        songRepository,
      },
    });
  },
};
