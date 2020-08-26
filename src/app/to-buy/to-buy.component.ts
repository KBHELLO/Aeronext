import {Component, OnInit} from '@angular/core';
import {Constant} from '../../Helper/constant';
import {FcService} from '../fc.service';
import {Product} from '../Entity/product';

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.css']
})
export class ToBuyComponent implements OnInit {

  toBuy: string = Constant.TO_BUY;
  uavProducts: string = Constant.UAV_PRODUCTS;
  iotProducts: string = Constant.IOT_PRODUCTS;
  roboticsProduct: string = Constant.ROBOTICS_PRODUCTS;
  arVrProduct: string = Constant.AR_VR_PRODUCTS;
  grateSprite: string = Constant.GREAT_SPIRIT;
  weAreComingSoon: string = Constant.WE_ARE_COMING_SOON;
  allProduct: Product[] = [];
  preview: string = Constant.PREVIEW;
  filter: string = Constant.FILTER;
  price: string = Constant.PRICE;
  drone: any;

  constructor(private fcService: FcService) {
  }

  ngOnInit() {
    this.fcService.getAllProduct().subscribe(
      res => {
        this.allProduct = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
