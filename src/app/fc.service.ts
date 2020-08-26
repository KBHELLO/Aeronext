import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './Entity/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcService {

  constructor(private http: HttpClient) {
  }

  getGalleryImagesUrl() {
    return this.http.get<any>('../assets/gallery-data/img.json');
  }

  getAllProduct(): Observable<Product []> {
    return this.http.get<Product []>('../assets/ecommerce-data/drone.json');
  }
}
