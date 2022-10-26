import { Module } from '@nestjs/common';
import { nestFirstCtrl } from './nestFirst.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
	controllers: [ nestFirstCtrl ],
	imports : [ UserModule, AuthModule, BookmarkModule ],
})

export class nestFirstModule {};
