import { 
    Controller, 
    Post, Body, Req, Res,
    Param,
    HttpStatus
 } from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs';
import { getTimeToString } from '../util';
import { NotificationService } from './notification.service';

/*

~/cloud-gw/v1/event/{applicationMakerName}
applicationMakerName: humanict, ivis, yokokawa, comtek

http://1.111.111.111/cloud-gw/v1/event/{applicationMakerName}

*/
@Controller('cloud-gw/v1/event')
export class NotificationController {
    constructor(
        private readonly notificationService: NotificationService
    ) {}

    @Post(':applicationMakerName')
    async create(@Param() param, @Body() req: any, @Res() res: Response) {
        console.log('param : ', req);
        if (!param.applicationMakerName) {
            res.status(HttpStatus.NOT_IMPLEMENTED).send();
        } else {
            this.notificationService.writeFile(param.applicationMakerName, JSON.stringify(req))
                .then(() => {
                    res.status(HttpStatus.CREATED).send();
                }, () => {
                    res.status(HttpStatus.FAILED_DEPENDENCY).send();
                });
        }
    }
}