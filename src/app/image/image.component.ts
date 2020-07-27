import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';
import { ImageService } from '../service/image-service.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {
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
