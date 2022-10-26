import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {

	constructor(private prismaService: PrismaService) {}

	signin(): string {
		return ('I\'m signin');
	}

	signup(): string {
		return ('Trying to signup');
	}
}
