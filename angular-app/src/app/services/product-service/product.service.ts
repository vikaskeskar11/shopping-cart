import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api.service";
import { HttpService } from "../http-service/http.service";

@Injectable()
export class ProductService extends ApiService {
    constructor(private _http: HttpService) {
        super()
    }

    getAll() {
        return this._http.get(this.apiBaseURL + 'api/products')
    }
}