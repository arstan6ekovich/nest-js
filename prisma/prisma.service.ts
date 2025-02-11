import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

export class CarsServices extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
