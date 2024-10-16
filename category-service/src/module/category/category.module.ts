import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './model'; 
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SequelizeModule.forFeature([Category]), HttpModule], 
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}