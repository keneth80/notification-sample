import * as fs from 'fs';

export const getTimeToString = () => {
    const nowDate = new Date();
    const fileName = nowDate.getFullYear() + '-' +
            (nowDate.getMonth() + 1) + '-' +
            nowDate.getDate() + '-' +
            nowDate.getHours() + '-' +
            nowDate.getMinutes() + '-' +
            nowDate.getSeconds();
    return fileName;
}

export const mkdir = ( dirPath ) => {
    const isExists = fs.existsSync( dirPath );
    if( !isExists ) {
        fs.mkdirSync( dirPath, { recursive: true } );
    }
}