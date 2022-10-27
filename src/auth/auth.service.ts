import { Injectable, Req, Body, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Request } from 'express';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(private prismaService: PrismaService) {}

	async signup(@Body() authDto: AuthDto) {

		// hash the pwd with argon2 with async function
		const hash = await argon.hash(authDto.password);

		// because email @isunique we need to catch the prisma error
		try {
			// create user in the db
			// user is from the prisma.schema and data are User properties
			const user = await this.prismaService.user.create({
				data: {
					email: authDto.email,
					hashPwd: hash,
				},
			});
			return (user);
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// P2002 is the unique error
				if (error.code === 'P2002') {
					throw new ForbiddenException('Credentials taken');
				}
			}
			throw (error);
		}
	}

	signin(): string {
		return ('I\'m signin');
	}
}
