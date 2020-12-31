import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../cookie.service';
import { COOKIE_TOKEN } from '../../app.constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public cookieService: CookiesService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                token: this.cookieService.get(COOKIE_TOKEN)
            }
        });
        return next.handle(request);
    }
}
