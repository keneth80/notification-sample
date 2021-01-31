import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { getTimeToString, mkdir } from '../util';

@Injectable()
export class NotificationService {
    writeFile(application: string, content: string) {
        return new Promise((resolve: any, reject: any) => {
            mkdir('./event/' + application);
            fs.writeFile(
                './event/' + application + '/' + getTimeToString() + '.json',
                content,
                (error) => {
                    if (error) {
                        console.log('Error ==>', error);
                        reject(error);
                    } else {
                        console.log('complete');
                        resolve();
                    }
                }
            );
        })
    }
}
