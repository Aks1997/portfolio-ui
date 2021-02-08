import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utils } from '../utils';
import { CommonConstants } from 'src/app/common/common-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let customHeaders= {
    //   Authorization: 'Basic ' + Utils.getBasicAuth()
    // }
    req.headers.set("Authorization", "Basic "+Utils.getBasicAuth());
    if(localStorage.getItem(CommonConstants.ACCESS_TOKEN)){
      req.headers.set(CommonConstants.ACCESS_TOKEN, localStorage.getItem(CommonConstants.ACCESS_TOKEN));
    }

    req = req.clone({
      url:Utils.getDocumentsRoot()+"/"+ req.url
    });

    return next.handle(req);
  }
}
