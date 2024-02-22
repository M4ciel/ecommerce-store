import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Length } from 'class-validator';

export class CreateSizeDto {
  @IsString({
    message: '[name] must be a string',
  })
  @Length(1, 50, {
    message: '[name] must be between 1 and 50 characters',
  })
  @ApiProperty({
    description: 'Name of the size',
    maximum: 50,
    type: String,
    required: true,
    example: 'Large',
  })
  name: string;

  @IsString({
    message: '[value] must be a string',
  })
  @Length(1, 50, {
    message: '[value] must be between 1 and 50 characters',
  })
  @ApiProperty({
    description: 'Value of the size',
    maximum: 50,
    type: String,
    required: true,
    example: 'L',
  })
  value: string;

  @IsUUID('all', {
    message: '[categoryId] must be a valid UUID',
  })
  @ApiProperty({
    description: 'Category ID',
    type: String,
    maximum: 36,
    required: true,
    example: '1cf6b734-7f82-11ee-b962-0242ac120002',
  })
  categoryId: string;
}
