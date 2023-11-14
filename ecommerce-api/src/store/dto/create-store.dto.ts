import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Length } from 'class-validator';

export class CreateStoreDto {
  @IsString({
    message: '[name] must be a string',
  })
  @Length(1, 50, {
    message: '[name] must be between 1 and 50 characters',
  })
  @ApiProperty({
    description: 'Name of the store',
    maximum: 50,
    type: String,
    required: true,
    example: 'My-Store',
  })
  name: string;

  @IsUUID('all', {
    message: '[userId] must be a valid UUID',
  })
  @ApiProperty({
    description: 'User logged ID',
    type: String,
    maximum: 255,
    required: true,
    example: '1cf6b734-7f82-11ee-b962-0242ac120002',
  })
  userId: string;
}
