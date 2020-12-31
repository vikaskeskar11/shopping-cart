import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  public apiBaseURL = environment.apiBaseUrl;

  constructor() { }
}
