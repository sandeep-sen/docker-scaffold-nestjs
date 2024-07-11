import { Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import 'dotenv/config';

const connectionString = process.env.API_KEY || "<YOUR_API_KEY>";

@Injectable()
export class AppService {
  buildResponse(@Res() res: Response, message: String, status_code: number): Response {
    res.status(status_code);
    res.json(
      {
        Message: message
      }
    );
    return res;
  }

  async callBackendAPI(payload: string) {
    return payload;
  }


  get404Error(@Res() res: Response): Response {
    return this.buildResponse(res, 'Page Unavailable', 404);
  }

  async sendMessage(@Req() req: Request, @Res() res: Response): Promise<Response> {
    if (!req.is('application/json')) {
      return this.buildResponse(res, "Content Type is not application/json", 415)
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      return this.buildResponse(res, 'Request has no body', 400)
    }
    var result = null;
    try {
      result = await this.callBackendAPI(req.body)
    } catch (error) {
      return this.buildResponse(res, JSON.stringify({ Message: "Error in sending message to Service Bus", Error: error.message }), 500)
    }
    return this.buildResponse(res, result, 201)
  }
}
