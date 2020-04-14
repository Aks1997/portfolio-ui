import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule } from 'ngx-restangular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioPageModule } from './portfolio-page/portfolio-page.module';
import { RestangularConfigFactory } from './network/RestAngularConfig';
import { ProgressbarHandlerService } from './portfolio-page/progressbar/progressbar-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarHandlerService } from './portfolio-page/snackbar/snackbar-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioPageModule,
    RestangularModule.forRoot([ProgressbarHandlerService, SnackbarHandlerService], RestangularConfigFactory),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
