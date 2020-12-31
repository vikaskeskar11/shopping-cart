import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { HttpService } from '../http-service/http.service';

@Injectable()
export class CartService extends ApiService {

  constructor(private _http: HttpService) {
    super();
  }

  get() {
    return this._http.get(this.apiBaseURL + 'api/cart')
  }

  add(data: any) {
    return this._http.post(this.apiBaseURL + 'api/cart', data)
  }

  remove(data: any) {
    return this._http.delete(this.apiBaseURL + 'api/cart', data)
  }

  removeAll(data: any) {
    return this._http.delete(this.apiBaseURL + 'api/cart/all', data)
  }
}
