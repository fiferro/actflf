import { Injectable } from '@nestjs/common';
import IORedis  from 'ioredis';

@Injectable()
export class RedisService {
  private client: IORedis;

  constructor() {
    this.client = new IORedis({
      host: 'localhost',
      port: 6379,
    });
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string, ttlSeconds = 60): Promise<void> {
    await this.client.set(key, value, 'EX', ttlSeconds);
  }
}