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

        // TODO: May 23, 2022 -> maybe figure this out but when doing put requests there has to be a trailing slash for this to work with the django-rest-framework
        if (request.method == "PUT") {
            request = request.clone({
                url: request.url + "/",
            });
        }
        return next.handle(request);
    }
}