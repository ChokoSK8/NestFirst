import { Module } from '@nestjs/common';
import { nestFirstCtrl } from './nestFirst.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	controllers: [ nestFirstCtrl ],
	imports : [ UserModule, AuthModule, BookmarkModule, PrismaModule ],
})

export class nestFirstModule {};
