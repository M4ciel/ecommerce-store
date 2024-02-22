import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(_createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.findOneByNameAndBillboardId(
        _createCategoryDto.name,
        _createCategoryDto.billboardId,
      );

      if (!category) {
        return this.save(_createCategoryDto);
      }

      return category;
    } catch (error) {
      console.error(error);
    }
  }

  save(_createCategoryDto: CreateCategoryDto): Promise<Category | null> {
    return this.categoryRepository.save({
      name: _createCategoryDto.name,
      billboard: {
        id: _createCategoryDto.billboardId,
      },
    });
  }

  findAll() {
    return this.categoryRepository.find({
      relations: {
        billboard: true,
      },
    });
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({
      where: {
        id,
      },
      relations: {
        billboard: true,
      },
    });
  }

  findOneByNameAndBillboardId(name: string, billboardId: string) {
    return this.categoryRepository.findOneBy({
      name,
      billboard: {
        id: billboardId,
      },
    });
  }

  update(id: string, _updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository
      .update(id, {
        name: _updateCategoryDto.name,
        billboard: {
          id: _updateCategoryDto.billboardId,
        },
      })
      .then(() => {
        return this.findOne(id);
      });
  }

  remove(id: string) {
    return this.categoryRepository.softDelete(id);
  }
}
