import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SunController } from './sun/sun.controller';
import { SunService } from './sun/sun.service';

@Module({
  imports: [],
  controllers: [AppController, SunController],
  providers: [AppService, SunService],
})
export class AppModule {}
