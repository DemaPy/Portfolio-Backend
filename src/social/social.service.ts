import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SocialService {
  constructor(private readonly prisma: PrismaService) {}

  async addSocial(payload: Prisma.SocialCreateArgs['data']) {
    return this.prisma.social.create({
      data: payload,
    });
  }

  async getSocials() {
    return this.prisma.social.findMany();
  }
}
