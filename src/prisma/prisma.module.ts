import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
	//exports mean that modules which import that module have access to providers
	exports: [PrismaService]
})
export class PrismaModule {}
