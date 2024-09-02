import { Module } from '@nestjs/common';
import { InfluencersService } from './influencers.service';
import { InfluencersController } from './influencers.controller';
import { InfluencerRepository } from './repositories/influencer.repository';

@Module({
  controllers: [InfluencersController],
  providers: [InfluencersService, InfluencerRepository],
})
export class InfluencersModule {}
