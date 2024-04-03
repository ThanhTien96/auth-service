import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  //   @Prop({ default: { c1: 50, c2: 100 }, require: false })
  //   wallets: { c1: number; c2: number };
}

export const UserSchema = SchemaFactory.createForClass(User);
