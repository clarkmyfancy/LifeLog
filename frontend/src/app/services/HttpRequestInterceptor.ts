import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    // constructor(private tokenExtractor)
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request);
        const base_url_of_server = 'http://localhost:8000';
        // const headers = request.headers.append('csrftoken', 'USTgBEBCskkXKbAUDra2GkbtFFz4eOvYdAyFXMFLa4MlufuHhw7l5Jc8Bihf6J5k');
        request = request.clone({
            url: base_url_of_server + request.url,
            // headers: headers
        });
        return next.handle(request);
    }
}