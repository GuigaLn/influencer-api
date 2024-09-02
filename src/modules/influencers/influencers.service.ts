import { Injectable } from '@nestjs/common';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { UpdateInfluencerDto } from './dto/update-influencer.dto';
import { InfluencerRepository } from './repositories/influencer.repository';
import { InfluencerNotFound } from 'src/shared/exceptions/bad-request.exception';

@Injectable()
export class InfluencersService {
  constructor(private readonly influencerRepository: InfluencerRepository) {}

  async create(createInfluencerDto: CreateInfluencerDto) {
    const influencer = await this.influencerRepository.create(
      createInfluencerDto,
    );
    return influencer;
  }

  async findAll() {
    const influencers = await this.influencerRepository.findAll();
    return influencers;
  }

  async findOne(id: string) {
    const influencer = await this.influencerRepository.findOne(id);
    if (!influencer) {
      throw new InfluencerNotFound();
    }

    return influencer;
  }

  async update(id: string, updateInfluencerDto: UpdateInfluencerDto) {
    const exists = await this.influencerRepository.findOne(id);
    if (!exists) {
      throw new InfluencerNotFound();
    }

    const influencer = await this.influencerRepository.update(
      id,
      updateInfluencerDto,
    );
    if (!influencer) {
      throw new InfluencerNotFound();
    }

    return influencer;
  }
}
