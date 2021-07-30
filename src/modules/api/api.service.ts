import { Injectable } from '@nestjs/common';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class ApiService {
  constructor(private readonly cacheService: CacheService) {}

  set(key: string, data: string): string {
    return this.cacheService.set(key, data);
  }

  get(key: string): string {
    return this.cacheService.get(key);
  }
}
