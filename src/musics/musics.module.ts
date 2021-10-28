import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';
import { musicSchema } from '../schemas/music.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Music',
        schema: musicSchema,
      },
    ]),
  ],
  controllers: [MusicsController],
  providers: [MusicsService],
})
export class musicModule {}
