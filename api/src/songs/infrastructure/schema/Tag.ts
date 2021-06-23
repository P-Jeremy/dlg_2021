import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class TagClass {
  @Prop({ required: true })
  name: string;
}

export const TagSchema = SchemaFactory.createForClass(TagClass);
export const Tag = mongoose.model('Tag', TagSchema);
