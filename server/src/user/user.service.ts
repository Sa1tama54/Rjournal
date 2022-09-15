import { SearchUserDto } from './dto/search-user.dto';
import { UserEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  async search(dto: SearchUserDto) {
    const qb = this.repository.createQueryBuilder('u');

    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);

    if (dto.fullName) {
      qb.andWhere(`u.fullName ILIKE :fullName`);
    }

    if (dto.email) {
      qb.andWhere(`u.email ILIKE :email`);
    }

    qb.setParameters({
      fullName: `%${dto.fullName}%`,
      email: `%${dto.email}%`,
    });

    const [items, total] = await qb.getManyAndCount();

    return {
      items,
      total,
    };
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  findByCond(cond: FindOptionsWhere<UserEntity>) {
    return this.repository.findOne({ where: cond });
  }
}
