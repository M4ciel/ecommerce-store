import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Length } from 'class-validator';

export class CreateBillboardDto {
  @IsString({
    message: '[label] must be a string',
  })
  @Length(1, 50, {
    message: '[label] must be between 1 and 50 characters',
  })
  @ApiProperty({
    description: 'The label of the billboard',
    type: String,
    maximum: 50,
    required: true,
    example: 'My Billboard collection!',
  })
  label: string;

  @IsString({
    message: '[imageUrl] must be a string',
  })
  @Length(1, 255, {
    message: '[imageUrl] must be between 1 and 255 characters',
  })
  @ApiProperty({
    description: 'The billboard background image url',
    type: String,
    maximum: 255,
    required: true,
    example:
      'https://res.cloudinary.com/user/image/upload/vExample/example.jpg',
  })
  imageUrl: string;

  @IsUUID('all', {
    message: '[storeId] must be a valid UUID',
  })
  @ApiProperty({
    description: 'Store ID',
    type: String,
    maximum: 36,
    required: true,
    example: '1cf6b734-7f82-11ee-b962-0242ac120002',
  })
  storeId: string;
}
