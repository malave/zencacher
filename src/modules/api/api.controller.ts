import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('storage/:key')
  async get(@Param('key') key: string) {
    return this.apiService.get(key);
  }

  @Post('storage/:key')
  async set(@Param('key') key: string, @Body('data') data: string) {
    return this.apiService.set(key, data);
  }
}
