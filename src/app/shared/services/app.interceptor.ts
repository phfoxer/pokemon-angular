import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const newHeaders = new HttpHeaders({
            "Authorization": `Bearer `
        });
        const clone = request.clone({
            headers: newHeaders,
            url: `${request.url.includes('https')? '' : environment.baseUrl}${request.url}`
        });

        return next.handle(clone).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(() => error);
            })
        );
    }
}
