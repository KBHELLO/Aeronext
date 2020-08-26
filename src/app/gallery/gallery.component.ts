import {Component, OnInit} from '@angular/core';
import {Constant} from '../../Helper/constant';
import {FcService} from '../fc.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: string = Constant.GALLERY;
  images: string[] = [];
  imageIndex = 0;

  constructor(private fcService: FcService) {
  }

  ngOnInit() {
    this.getAllImages();
  }

  getAllImages() {
    this.fcService.getGalleryImagesUrl().subscribe(
      res => {
        this.images = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  getImage(i: number) {
    console.log(i);
    this.imageIndex = i;
  }
}
