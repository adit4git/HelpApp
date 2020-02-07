import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { AuthSvc } from '@app/_services';

@Injectable()
export class JwtUtil implements HttpInterceptor {
    constructor(private authsvc: AuthSvc ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authsvc.currentUserValue;
        if (currentUser && currentUser.token) {
            // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authsvc.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
       
        const isApiUrl = req.url.startsWith(environment.apiUrl);
       
       
        if (isLoggedIn && isApiUrl) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
    } 

        return next.handle(req);
    }
}