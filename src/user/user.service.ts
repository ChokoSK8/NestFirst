import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
	get() {
		return ({ name: 'abrun', email: 'abrun@student.42.fr' });
	}
	create(createUserDto: CreateUserDto) {
		return (createUserDto);
	}
	update(updateUserDto: UpdateUserDto, param: { userId: number }) {
		return ({ updateUserDto, param });
	}
	getUser(param: { userId: number }) {
		return (param);
	}
	deleteUser(param: { userId: number}) {
		return (param);
	}
}
