import { Injectable } from '@nestjs/common';
import { CreateBillboardDto } from './dto/create-billboard.dto';
import { UpdateBillboardDto } from './dto/update-billboard.dto';
import { Billboard } from './entities/billboard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BillboardService {
  constructor(
    @InjectRepository(Billboard)
    private billboardRepository: Repository<Billboard>,
  ) {}

  async create(_createBillboardDto: CreateBillboardDto) {
    try {
      const billboard = await this.findOneByLabelAndStoreId(
        _createBillboardDto.label,
        _createBillboardDto.storeId,
      );

      if (!billboard) {
        return this.save(_createBillboardDto);
      }

      return billboard;
    } catch (error) {
      console.error(error);
    }
  }

  save(_createBillboardDto: CreateBillboardDto): Promise<Billboard | null> {
    return this.billboardRepository.save({
      label: _createBillboardDto.label,
      imageUrl: _createBillboardDto.imageUrl,
      store: {
        id: _createBillboardDto.storeId,
      },
    });
  }

  findAll() {
    return this.billboardRepository.find({
      relations: {
        store: true,
      },
    });
  }

  findOne(id: string) {
    return this.billboardRepository.findOne({
      where: {
        id,
      },
      relations: {
        store: true,
      },
    });
  }

  findOneByLabelAndStoreId(label: string, storeId: string) {
    return this.billboardRepository.findOneBy({
      label,
      store: {
        id: storeId,
      },
    });
  }

  update(id: string, _updateBillboardDto: UpdateBillboardDto) {
    return this.billboardRepository
      .update(id, {
        label: _updateBillboardDto.label,
        imageUrl: _updateBillboardDto.imageUrl,
        store: {
          id: _updateBillboardDto.storeId,
        },
      })
      .then(() => {
        return this.findOne(id);
      });
  }

  remove(id: string) {
    return this.billboardRepository.softDelete(id);
  }
}
