import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { SocialService } from './social/social.service';
import { SocialController } from './social/social.controller';
import { SocialModule } from './social/social.module';

@Module({
  imports: [SocialModule],
  controllers: [AppController, SocialController],
  providers: [AppService, PrismaService, SocialService],
})
export class AppModule {}
