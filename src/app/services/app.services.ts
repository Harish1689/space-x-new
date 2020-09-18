import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_CONSTANT } from '../constant/urlConstant';
// import 'rxjs-compat';
import { map } from 'rxjs/operators/';
// import {ApiService} from '../services/api.service';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  myproduct(filterArray): Observable<any> {
    return this.http
      .get(
        URL_CONSTANT.BASE_URL +
          URL_CONSTANT.PRODUCT +
          '?limit=' +
          filterArray.limit +
          '&launch_success=' +
          filterArray.launch_success +
          '&land_success=' +
          filterArray.land_success +
          '&launch_year=' +
          filterArray.launch_year
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
