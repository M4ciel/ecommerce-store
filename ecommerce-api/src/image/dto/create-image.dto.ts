import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsUrl } from 'class-validator';

export class CreateImageDto {
  @IsUrl({}, { message: 'Is not a valid URL' })
  @ApiProperty({
    description: 'The product image url.',
    type: URL,
    maximum: 255,
    required: true,
    example: '',
  })
  url: string;

  @IsUUID('all', {
    message: '[productId] must be a valid UUID',
  })
  @ApiProperty({
    description: 'Category ID',
    type: String,
    maximum: 36,
    required: true,
    example: '1cf6b734-7f82-11ee-b962-0242ac120002',
  })
  productId: string;
}
