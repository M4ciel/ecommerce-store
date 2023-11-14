import { Module } from '@nestjs/common';
import { BillboardService } from './billboard.service';
import { BillboardController } from './billboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billboard } from './entities/billboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Billboard])],
  controllers: [BillboardController],
  providers: [BillboardService],
})
export class BillboardModule {}
