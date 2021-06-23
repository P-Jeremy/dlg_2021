import { SongModel } from '../../../../infrastructure/schema/Song';
import songsRepository from '../../../../infrastructure/repositories/songsRepository';
import * as mongoose from 'mongoose';
import { Song } from '../../../../domain/models/Song';

function dbconnect() {
  mongoose.connect(process.env.MONGO_CONFIG_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  return mongoose.connection;
}

function dbclose() {
  return mongoose.disconnect();
}

describe('INTEGRATION | REMPOSITORY | songsRepository', () => {
  afterEach(async () => {
    try {
      return await SongModel.find({}).deleteMany();
    } catch (error) {
      if (error) {
        throw Error();
      }
    }
  });

  beforeAll((done) => {
    dbconnect()
      .once('open', () => done())
      .on('error', (error) => done(error));
  });

  afterAll((done) => {
    dbclose()
      .then(() => done())
      .catch((err) => done(err));
  });
  describe('When there are songs in the db', () => {
    it('returns all the songs', async function () {
      // given
      const song1ToSave = new SongModel({
        title: 'Big bisou',
        author: 'Tintin',
        lyrics: 'Big bisooooou',
        tab: 'http.tabs.fr',
      });

      const song2ToSave = new SongModel({
        title: 'Big bisou',
        author: 'Tintin',
        lyrics: 'Big bisooooou',
        tab: 'http.tabs.fr',
      });

      await song1ToSave.save();
      await song2ToSave.save();

      // when
      const result = await songsRepository.getAll();

      // then
      expect(result.length).toEqual(2);
      expect(result[0]).toBeInstanceOf(Song);
      expect(result[0].title).toEqual('Big bisou');
      expect(result[1]).toBeInstanceOf(Song);
    });
  });
});
