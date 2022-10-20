import { Module } from '@nestjs/common';
import { nestFirstCtrl } from './nestFirst.controller';
import { UserModule } from './user/user.module';

@Module({
	controllers: [ nestFirstCtrl ],
	imports : [ UserModule ],
})

export class nestFirstModule {};
