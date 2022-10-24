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
	update(updateUserDto: UpdateUserDto, userId: number) {
		return ({ updateUserDto, userId });
	}
	getUser(userId: number) {
		return ({userId});
	}
	deleteUser(userId: number) {
		return ({userId});
	}
}
