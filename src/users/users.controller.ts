import {Body, Controller, Delete, Get, HttpStatus, Patch, Post, Req, Res} from '@nestjs/common';
import {CreateUserDto} from "./dto/users.dto";
import {UsersService} from "./users.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) {
    }

    @Get()
    async getUsersList() {

    }

    @Post()
    async createUser(
        @Req() req: any,
        @Body() body: CreateUserDto,
        @Res() res: any,
    ) {
        // const user = await this.userService.createUser(body);
        // return user;
        return res.status(HttpStatus.CREATED).json(await this.userService.createUser(body));
    }

    @Delete('/:id')
    async deleteUser() {

    }

    @Patch('/:id')
    async updateUser(){

    }

    @Post('/animals/:id')
    async addNewPet() {

    }
}
