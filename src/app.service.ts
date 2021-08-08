import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async get() {
    return {
      envFromDotEnv: process.env.TEST,
      envFromServerlessYml: process.env.CONFIG_ENV,
    };
  }
}
