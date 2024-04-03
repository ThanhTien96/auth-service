import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async listUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async createUser(user: User): Promise<User> {
    if (!user.username) {
      throw new BadRequestException('user name is require !');
    }

    if (!user.password) {
      console.log('hello');
      throw new BadRequestException('password is require !');
    }
    const response = await this.userModel.create(user);
    return response;
  }
}
