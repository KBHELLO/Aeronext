import {Component, OnInit} from '@angular/core';
import {Constant} from '../Helper/constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aeronext';
  about: string = Constant.ABOUT;
  toBuy: string = Constant.TO_BUY;
  ourSolution: string = Constant.OUR_SOLUTION;
  training: string = Constant.TRAINING;
  gallery: string = Constant.GALLERY;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  solution() {
    this.router.navigate(['solution']);
  }

  buy() {
    this.router.navigate(['buy']);
  }

  trainingFC() {
    this.router.navigate(['training']);
  }

  galleryFC() {
    this.router.navigate(['gallery']);
  }
}
