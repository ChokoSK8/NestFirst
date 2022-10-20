import { Controller, Get, Post, Patch, Delete, Req, Param } from '@nestjs/common';
import { Request} from 'express';

@Controller('user')

export class UserController {

		@Get()
		getUsers() {
			return ('getUsers() from user');
		}
	// means we are creating something
	@Post()
		// @Req() is used to access the request object 
		// : Request is used to specify the var request type
		store(@Req() req: Request) {
			return (req.body);
		}

	@Patch('/:userId')
		update(@Req() req: Request) {
			return (req.body);
		}

	// :userId means that userId is dynamic data
	@Get('/:userId')
		// @Param is use to catch the userId
		// getUser(@Param() userIdParam: number)
		getUser(@Param() params: { userId: number }) {
			return (params);
		}

	@Delete('/:userId')
		deleteUser(@Param() params: { userId: number}) {
			return (params);
		}
}
