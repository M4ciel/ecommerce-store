import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async create(_createImageDto: CreateImageDto) {
    try {
      const image = await this.findOneByUrl(_createImageDto.url);

      if (!image) {
        return this.save(_createImageDto);
      }

      return image;
    } catch (error) {
      console.error(error);
    }
  }

  save({ url, productId }: CreateImageDto): Promise<Image | null> {
    return this.imageRepository.save({
      url,
      product: {
        id: productId,
      },
    });
  }

  findAll() {
    return this.imageRepository.find();
  }

  findOne(id: string) {
    return this.imageRepository.findOneBy({
      id,
    });
  }

  findOneByUrl(url: string) {
    return this.imageRepository.findOneBy({
      url,
    });
  }

  remove(id: string) {
    return this.imageRepository.softDelete(id);
  }
}
