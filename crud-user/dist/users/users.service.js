"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const redis_service_1 = require("../redis/redis.service");
let UsersService = class UsersService {
    userRepository;
    redisService;
    constructor(userRepository, redisService) {
        this.userRepository = userRepository;
        this.redisService = redisService;
    }
    async create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }
    async findAll() {
        const cached = await this.redisService.get('users');
        if (cached)
            return JSON.parse(cached);
        const users = await this.userRepository.find();
        await this.redisService.set('users', JSON.stringify(users), 60);
        return users;
    }
    async findOne(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException('Usuário não encontrado');
        return user;
    }
    async update(id, dto) {
        await this.userRepository.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        redis_service_1.RedisService])
], UsersService);
//# sourceMappingURL=users.service.js.map