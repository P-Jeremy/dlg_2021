import { Song } from '../models/Song';

interface GetAllSongsSignature {
  dependencies: {
    songRepository: {
      getAll: () => Promise<Song[]>;
    };
  };
}

export function getAllSongs({
  dependencies: { songRepository },
}: GetAllSongsSignature): Promise<Song[]> {
  return songRepository.getAll();
}
