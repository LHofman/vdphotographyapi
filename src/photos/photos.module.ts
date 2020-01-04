import { Module } from '@nestjs/common'
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
    imports: [],
    controllers: [PhotosController],
    providers: [PhotosService],
})
export class PhotosModule {}