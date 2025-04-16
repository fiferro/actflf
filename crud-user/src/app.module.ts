import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RedisService } from './redis/redis.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // ou 'postgres'
      host: '144.217.139.220',
      port: 3306,
      username: 'actflf',
      password: 'actflf',
      database: 'actflf',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class AppModule {}