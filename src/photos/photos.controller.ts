import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { CreatePhotoDto } from './dto/create-photo.dto';
import { Photo } from './interfaces/photo.interface';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
    constructor(private readonly photosService: PhotosService) {}

    @Get()
    findAll(): Promise<Photo[]> {
        return this.photosService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id): Promise<Photo> {
        return this.photosService.findById(id);
    }

    @Post()
    create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
        return this.photosService.create(createPhotoDto);   
    }

    @Post('Upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadFile(@UploadedFile() file) {
        return this.photosService.uploadPhoto(file.buffer);
    }
  
    @Put(':id')
    update(@Param('id') id, @Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
        return this.photosService.update(id, createPhotoDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Photo> {
        return this.photosService.delete(id);
    }
}
