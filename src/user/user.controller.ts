import { Controller, Get, Post, Patch, Delete, Req, Param, Body  } from '@nestjs/common';
import { Request} from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('user')

export class UserController {

	constructor(private userService: UserService) {}

	@Get()
	getUsers() {
		return (this.userService.get());
	}

	// means we are creating something
	@Post()
		// @Req() is used to access the request object 
		// : Request is used to specify the var request type
		store(@Body() createUserDto: CreateUserDto) {
			return (this.userService.create(createUserDto));
		}

	@Patch('/:userId')
		update(
		@Body() updateUserDto: UpdateUserDto,
		@Param() param: { userId: number }
		){
			return (this.userService.update(updateUserDto, param));
		}

	// :userId means that userId is dynamic data
	@Get('/:userId')
		// @Param is use to catch the userId
		// getUser(@Param() userIdParam: number) if we only have one param
		getUser(@Param() param: { userId: number }) {
			return (this.userService.getUser(param));
		}

	@Delete('/:userId')
		deleteUser(@Param() param: { userId: number}) {
			return (this.userService.deleteUser(param));
		}
}
