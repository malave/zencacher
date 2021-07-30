import { Injectable } from '@nestjs/common';
import { Cache } from './models/cache.model';
import { CAPACITY } from '../../constants';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheService {
  private readonly cache: Cache;

  constructor(private configService: ConfigService) {
    const capacity = configService.get(CAPACITY);
    this.cache = new Cache(parseInt(capacity));
  }

  set(key: string, data: string): string {
    return this.cache.set(key, data);
  }

  get(key: string): string {
    return this.cache.get(key);
  }
}
