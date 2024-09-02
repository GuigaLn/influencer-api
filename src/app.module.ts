import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { InfluencersModule } from './modules/influencers/influencers.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [DatabaseModule, InfluencersModule],
  controllers: [],
  providers: [
    JwtService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
