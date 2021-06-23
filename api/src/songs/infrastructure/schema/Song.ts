import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SongDocument = Song & mongoose.Document;

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  lyrics: string;

  @Prop({ required: true })
  tab: string;

  @Prop({ ref: 'Tag', required: false })
  tags: mongoose.Schema.Types.ObjectId[];
}

const SongSchema: mongoose.Schema<SongDocument> =
  SchemaFactory.createForClass(Song);

export const SongModel = mongoose.model('Song', SongSchema);
