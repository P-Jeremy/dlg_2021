import { Song } from '../models/Song';

interface GetAllSongsSignature {
  dependencies: {
    songsRepository: {
      getAll: () => Promise<Song[]>;
    };
  };
}

export function getAllSongs({
  dependencies: { songsRepository },
}: GetAllSongsSignature): Promise<Song[]> {
  return songsRepository.getAll();
}
