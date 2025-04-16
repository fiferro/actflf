import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    create(dto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: string, dto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: string): Promise<void>;
}
