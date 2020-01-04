import { Injectable } from '@nestjs/common'
import { Photo } from './interfaces/photo.interface';
import PhotoModel from "./schemas/photo.schema";

@Injectable()
export class PhotosService {
    async findAll(): Promise<Photo[]> {
        return await PhotoModel.run();
    }

    async findById(id: String): Promise<Photo> {
        return await PhotoModel.get(id).run().error(this.handleError);
    }

    async create(photo: Photo): Promise<Photo> {
        return await new PhotoModel(photo).save().error(this.handleError);
    }

    async update(id: String, photo: Photo): Promise<Photo> {
        return await PhotoModel.get(id).run().then(p => {
            p.name = photo.name,
            p.file = photo.file
            return p.save().error(this.handleError);
        }).error(this.handleError);
    }

    async delete(id: String): Promise<Photo> {
        return await PhotoModel.get(id).run().then(photo => photo.deleteAll()).error(this.handleError);
    }

    handleError = error => {
        let {name, message} = error;

        switch (name) {
            case 'DocumentNotFoundError':
                message = 'Photo not Found';
                break;
        }

        return {
            success: false,
            message
        }
    }
}
