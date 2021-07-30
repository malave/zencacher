import { Module } from '@nestjs/common';
import { CacheModule } from '../cache/cache.module';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';

@Module({
  imports: [CacheModule],
  providers: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
