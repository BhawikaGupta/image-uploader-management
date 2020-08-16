import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';
import { ImageService } from '../service/image-service.service';

@Component({
  selector: 'app-image',
  templateUrl: './imageUploader.component.html',
  styleUrls: ['./imageUploader.component.css']
})

export class ImageUploaderComponent implements OnInit {
  images:Image[];

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
      console.log('scope is ');
      this.imageService.findAll().subscribe(data => {
        this.images = data;
      });
    }
}
