import { Controller, Get, Header, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Header('content-type', 'application/json')
  getRoot(@Res() res: Response): Response {
    return this.appService.get404Error(res);
  }

  @Get('/getResults')
  @Header('content-type', 'application/json')
  getHello(@Res() res: Response): Response {
    return this.appService.get404Error(res);
  }

  @Post('/getResults')
  @Header('content-type', 'application/json')
  async sendMessage(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.appService.sendMessage(req, res)
  }
}
