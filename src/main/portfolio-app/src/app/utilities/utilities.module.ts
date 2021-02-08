import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTemplateComponent } from './toolbar-template/toolbar-template.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ShowHideDirective } from './directives/show-hide.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [ToolbarTemplateComponent, SnackbarComponent, ProgressbarComponent, ShowHideDirective, ImageSliderComponent, PageNavigatorComponent, SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [ToolbarTemplateComponent, SnackbarComponent, ProgressbarComponent, ShowHideDirective,
    ImageSliderComponent, PageNavigatorComponent, SearchBarComponent]
})
export class UtilitiesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilitiesModule,
      providers: [
        
      ]
    };
  }
 }
