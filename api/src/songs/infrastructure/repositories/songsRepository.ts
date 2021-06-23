import { Song } from '../../domain/models/Song';
import { SongModel } from '../schema/Song';
import { Tag } from '../schema/Tag';

export default {
  async getAll(): Promise<Song[]> {
    const result = await SongModel.find()
      .populate({ path: 'tags', Model: Tag })
      .exec();
    return _toDomain(result);
  },
};

function _toDomain(songRow): Song[] {
  return songRow.map((song): Song => {
    return Song.from({
      id: song._id,
      title: song.title,
      author: song.author,
      lyrics: song.lyrics,
      tab: song.tab,
      tags: song.tags,
    });
  });
}
