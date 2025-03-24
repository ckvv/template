import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  // 生命周期钩子
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
