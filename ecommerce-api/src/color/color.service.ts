import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  async create(_createColorDto: CreateColorDto) {
    try {
      const color = await this.findOneByNameAndCategoryId(
        _createColorDto.name,
        _createColorDto.categoryId,
      );

      if (!color) {
        return this.save(_createColorDto);
      }

      return color;
    } catch (error) {
      console.error(error);
    }
  }

  save(_createColorDto: CreateColorDto) {
    return this.colorRepository.save({
      name: _createColorDto.name,
      value: _createColorDto.value,
      category: {
        id: _createColorDto.categoryId,
      },
    });
  }

  findAll() {
    return this.colorRepository.find({
      relations: {
        category: true,
      },
    });
  }

  findOne(id: string) {
    return this.colorRepository.findOne({
      where: {
        id,
      },
      relations: {
        category: true,
      },
    });
  }

  findOneByNameAndCategoryId(name: string, categoryId: string) {
    return this.colorRepository.findOneBy({
      name,
      category: {
        id: categoryId,
      },
    });
  }

  update(id: string, _updateColorDto: UpdateColorDto) {
    return this.colorRepository
      .update(id, {
        name: _updateColorDto.name,
        value: _updateColorDto.value,
        category: {
          id: _updateColorDto.categoryId,
        },
      })
      .then(() => {
        return this.findOne(id);
      });
  }

  remove(id: string) {
    return this.colorRepository.softDelete(id);
  }
}
