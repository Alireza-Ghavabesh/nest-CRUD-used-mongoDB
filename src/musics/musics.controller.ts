import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { Music } from './interfaces/music.interface';
import { MusicsService } from './musics.service';
import { MusicDto } from './dto/music.dto';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get()
  AllMusics(): Promise<Music[]> {
    return this.musicsService.findAll();
  }

  @Get(':id')
  findMusicById(@Param('id') id: string): Promise<Music> {
    return this.musicsService.findOne(id);
  }

  @Put()
  addMusicsBulk(): string {
    return 'new musics added.';
  }

  @Post()
  async addOneMusic(@Body() musicDto: MusicDto): Promise<Music> {
    return this.musicsService.addSingleMusic(musicDto);
  }

  @Delete(':id')
  async remvoeMusic(@Param('id') id: string): Promise<Music> {
    return this.musicsService.delete(id);
  }

  @Patch(':id')
  async updateMusic(
    @Param('id') id,
    @Body() MusicDto: MusicDto,
  ): Promise<Music> {
    return this.musicsService.update(id, MusicDto);
  }
}
