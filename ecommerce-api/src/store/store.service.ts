import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async create(_createStoreDto: CreateStoreDto) {
    try {
      const store = await this.findOneByNameAndUserId(
        _createStoreDto.name,
        _createStoreDto.userId,
      );

      if (!store) {
        return this.save(_createStoreDto);
      }

      return store;
    } catch (error) {
      console.error(error);
    }
  }

  save(_createStoreDto: CreateStoreDto): Promise<Store | null> {
    return this.storeRepository.save(_createStoreDto);
  }

  findAll() {
    return this.storeRepository.find();
  }

  findOne(id: string) {
    return this.storeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  findOneByNameAndUserId(name: string, userId: string) {
    return this.storeRepository.findOneBy({
      name,
      userId,
    });
  }

  update(id: string, _updateStoreDto: UpdateStoreDto) {
    return this.storeRepository.update(id, _updateStoreDto).then(() => {
      return this.findOne(id);
    });
  }

  remove(id: string) {
    return this.storeRepository.softDelete(id);
  }
}
