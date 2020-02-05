import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthSvc } from '@app/_services';

@Injectable()
export class JwtUtil implements HttpInterceptor {
    constructor(private authsvc: AuthSvc ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authsvc.currentUserValue;
        if (currentUser && currentUser.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ${currentUser.token}'
                }
            });
        } 

        return next.handle(req);
    }
}