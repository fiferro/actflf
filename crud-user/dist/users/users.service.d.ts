import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RedisService } from '../redis/redis.service';
export declare class UsersService {
    private userRepository;
    private redisService;
    constructor(userRepository: Repository<User>, redisService: RedisService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<User>;
    update(id: number, dto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
