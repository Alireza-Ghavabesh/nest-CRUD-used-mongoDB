import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Music } from './interfaces/music.interface';

@Injectable()
export class MusicsService {
  constructor(
    @InjectModel('Music') private readonly musicModel: Model<Music>,
  ) {}
  async addSingleMusic(music: Music): Promise<Music> {
    const newMusic = new this.musicModel(music);
    return await newMusic.save();
  }

  async findAll(): Promise<Music[]> {
    return await this.musicModel.find();
  }

  async findOne(id: string): Promise<Music> {
    try {
      return await this.musicModel.findOne({ _id: id });
    } catch {
      throw new NotFoundException('could not find music');
    }
  }

  async delete(id: string): Promise<Music> {
    try {
      return await this.musicModel.findByIdAndRemove(id);
    } catch {
      throw new NotFoundException('could not find music for delete.');
    }
  }

  async update(id: string, music: Music): Promise<Music> {
    try {
      return await this.musicModel.findByIdAndUpdate(id, music, { new: true });
    } catch {
      throw new NotFoundException('could not find music for update.');
    }
  }
}
