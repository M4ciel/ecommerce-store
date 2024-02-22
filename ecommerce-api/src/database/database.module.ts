import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: parseInt(process.env.DB_PORT as string) ?? 3306,
      host: process.env.DB_HOST ?? 'localhost',
      username: (process.env.DB_USER as string) ?? 'ecommerce-user',
      password: (process.env.DB_PWD as string) ?? 'ecommerce-password',
      database: (process.env.DB_NAME as string) ?? 'ecommerce-store',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
