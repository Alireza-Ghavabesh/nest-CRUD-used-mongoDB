import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() create_item_dto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(create_item_dto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return await this.itemsService.delete(id);
  }

  @Put(':id')
  async update(
    @Body() update_item_dto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemsService.update(id, update_item_dto);
  }
}
