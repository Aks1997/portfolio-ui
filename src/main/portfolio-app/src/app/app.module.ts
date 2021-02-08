import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule } from 'ngx-restangular';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioPageModule } from './portfolio-page/portfolio-page.module';
import { RestangularConfigFactory } from './network/RestAngularConfig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserMaintainanceService } from './portfolio-page/Models/Services/user-maintainance.service';
import { UtilitiesModule } from './utilities/utilities.module';
import { ProgressbarHandlerService } from './utilities/progressbar/progressbar-handler.service';
import { SnackbarHandlerService } from './utilities/snackbar/snackbar-handler.service';
import { HttpRequestInterceptorService } from './network/http-client/http-request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioPageModule,
    RestangularModule.forRoot([ProgressbarHandlerService, SnackbarHandlerService, UserMaintainanceService], RestangularConfigFactory),
    BrowserAnimationsModule,
    UtilitiesModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
