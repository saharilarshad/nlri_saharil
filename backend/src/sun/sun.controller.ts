import { Controller, Get } from '@nestjs/common';
import { SunService } from './sun.service';

@Controller('sun')
export class SunController {
  constructor(private readonly sunService: SunService){}

  @Get('pi')
  getMostAccurate():number {
    return this.sunService.getMostAccuratePi();

  }

  @Get('calculating-pi')
  calculatePi():number {
    return this.sunService.calculateNextPi();

  }

  @Get('get-circumference')
  circumference():number {
    return this.sunService.getCircumference();

  }


}
