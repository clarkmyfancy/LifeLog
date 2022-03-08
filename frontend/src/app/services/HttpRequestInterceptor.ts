import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request);
        const base_url_of_server = 'http://localhost:8000';
        request = request.clone({
            url: base_url_of_server + request.url,
        });
        return next.handle(request);
    }
}