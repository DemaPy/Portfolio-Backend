import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { SocialService } from './social.service';
import { responseObject } from 'src/utils/responseObject';
import { Prisma } from '@prisma/client';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post('')
  async addSocial(@Body() newSocial: Prisma.SocialCreateArgs['data']) {
    try {
      const data = await this.socialService.addSocial(newSocial);
      return responseObject({ data });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('')
  async getSocials() {
    try {
      const data = await this.socialService.getSocials();
      return responseObject({ data });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
