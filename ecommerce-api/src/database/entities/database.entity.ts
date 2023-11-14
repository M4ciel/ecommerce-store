import {
  PrimaryColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class DatabaseContent {
  @PrimaryColumn({
    type: 'uuid',
    unique: true,
    comment: 'The unique identifier (UUID) for the record.',
  })
  @Generated('uuid')
  id: string;

  @CreateDateColumn({
    comment: 'The date and time when the record was created.',
  })
  createdAt: Date;

  @UpdateDateColumn({
    comment: 'The date and time when the record was last updated.',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    comment:
      'The date and time when the record was soft-deleted (marked as deleted). If null, the record is considered active.',
  })
  deletedAt: Date;
}
