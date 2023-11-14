import { Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>,
  ) {}

  async create(_createSizeDto: CreateSizeDto) {
    try {
      const size = await this.findOneByNameAndCategoryId(
        _createSizeDto.name,
        _createSizeDto.categoryId,
      );

      if (!size) {
        return this.save(_createSizeDto);
      }

      return size;
    } catch (error) {
      console.error(error);
    }
  }

  save(_createSizeDto: CreateSizeDto) {
    return this.sizeRepository.save({
      name: _createSizeDto.name,
      value: _createSizeDto.value,
      category: {
        id: _createSizeDto.categoryId,
      },
    });
  }

  findAll() {
    return this.sizeRepository.find();
  }

  findOne(id: string) {
    return this.sizeRepository.findOne({
      where: {
        id,
      },
    });
  }

  findOneByNameAndCategoryId(name: string, categoryId: string) {
    return this.sizeRepository.findOneBy({
      name,
      category: {
        id: categoryId,
      },
    });
  }

  update(id: string, _updateSizeDto: UpdateSizeDto) {
    return this.sizeRepository
      .update(id, {
        name: _updateSizeDto.name,
        value: _updateSizeDto.value,
        category: {
          id: _updateSizeDto.categoryId,
        },
      })
      .then(() => {
        return this.findOne(id);
      });
  }

  remove(id: string) {
    return this.sizeRepository.softDelete(id);
  }
}
