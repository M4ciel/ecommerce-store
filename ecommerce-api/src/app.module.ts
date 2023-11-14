import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StoreModule } from './store/store.module';
import { BillboardModule } from './billboard/billboard.module';
import { CategoryModule } from './category/category.module';
import { SizeModule } from './size/size.module';
import { ColorModule } from './color/color.module';
import { ProductModule } from './product/product.module';
import { ImageModule } from './image/image.module';
import { StockModule } from './stock/stock.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    HealthModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    StoreModule,
    BillboardModule,
    CategoryModule,
    SizeModule,
    ColorModule,
    ProductModule,
    ImageModule,
    StockModule,
    CountryModule,
    StateModule,
    CityModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
