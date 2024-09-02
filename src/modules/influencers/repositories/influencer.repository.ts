import { Injectable } from '@nestjs/common';
import { Influencer } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreateInfluencerDto } from '../dto/create-influencer.dto';
import { UpdateInfluencerDto } from '../dto/update-influencer.dto';

@Injectable()
export class InfluencerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createInfluencerDto: CreateInfluencerDto): Promise<Influencer> {
    return await this.prismaService.influencer.create({
      data: createInfluencerDto,
    });
  }

  async findAll(): Promise<Influencer[]> {
    return await this.prismaService.influencer.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string): Promise<Influencer | null> {
    return await this.prismaService.influencer.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateInfluencerDto: UpdateInfluencerDto,
  ): Promise<Influencer> {
    return await this.prismaService.influencer.update({
      data: updateInfluencerDto,
      where: { id },
    });
  }
}
