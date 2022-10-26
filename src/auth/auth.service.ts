import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

	signin(): string {
		return ('I\'m signin');
	}

	signup(): string {
		return ('Trying to signup');
	}
}
