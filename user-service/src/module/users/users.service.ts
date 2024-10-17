import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private readonly userModel: typeof User) {

  }
  async create(payload: CreateUserDto): Promise<void> {
    await this.userModel.create({
      name: payload.name,
      email: payload.email,
      image: payload?.email || "not_found.png",
      phone: payload.phone
    })
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll()
  }

  async findOne(id: number): Promise<User> {
    return await this.userModel.findOne({ where: { id } });
  }

  async update(id: number, payload: UpdateUserDto): Promise<void> {
    await this.userModel.update(
      {
        name: payload?.name,
        email: payload?.email,
        image: payload?.email,
        phone: payload?.phone
      }, { where: { id } }
    )
  }

  async remove(id: number): Promise<void> {
    await this.userModel.destroy({ where: { id } })
  }
}
