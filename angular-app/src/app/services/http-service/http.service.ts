import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {

    errorDescription = '';
    constructor(private http: HttpClient) {
    }

    get(url: string, paramsObj?: HttpParams, responseType?: any): Observable<any> {
        if (!paramsObj) {
            paramsObj = new HttpParams();
            paramsObj.set('query', JSON.stringify(paramsObj));
        }
        const options: any = { params: paramsObj };
        if (responseType) {
            options.responseType = responseType;
        }
        return this.http.get(url, options)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    post(url: string, body?: Object, queryParams?: any): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(url, body, { headers, params: queryParams })
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    delete(url: string, body?: Object): Observable<any> {
        return this.http.request('delete', url, { body })
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    // tslint:disable-next-line:cyclomatic-complexity
    errorHandler(error: any): Observable<any> {
        return throwError(error);
    }

    private extractData = (res: any) => {
        return res;
    }

    private handleError = (error: Response | any) => {
        let errMsg: string;
        if (error instanceof Response) {
            const body: any = error || {};
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || err || ''}`;
            this.errorDescription = body.message || '';
        } else if (error instanceof HttpErrorResponse) {
            try {
                error = error.error ? (typeof (error.error) === 'string' ? JSON.parse(error.error) : error.error) : {};
            } catch (err) {
                error = error.error;
            }
            // errMsg = error.message || 'Internal Server Error.';
            errMsg = error && error.statusCode === 404 ? 'The requested object does not exist.' : error.error || 'Internal Server Error.';
        } else {
            errMsg = error.message ? error.message : error.toString();
            this.errorDescription = errMsg || '';
        }
        alert(error.err ? error.err : errMsg)
        return throwError((this.errorDescription && this.errorDescription !== '' ? this.errorDescription : errMsg));
    }
}
