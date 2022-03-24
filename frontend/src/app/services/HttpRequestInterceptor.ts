import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "environments/environment";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const base_url_of_server = environment.server_api_base_url;
        request = request.clone({
            url: base_url_of_server + request.url,
        });
        return next.handle(request);
    }
}