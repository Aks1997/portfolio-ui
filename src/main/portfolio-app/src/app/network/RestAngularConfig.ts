import { Utils } from './utils';
import { ProgressbarHandlerService } from '../portfolio-page/progressbar/progressbar-handler.service';
import { SnackbarHandlerService } from '../portfolio-page/snackbar/snackbar-handler.service';

export function RestangularConfigFactory(RestangularProvider, progressbarHandlerService: ProgressbarHandlerService, snackbarHandlerService: SnackbarHandlerService){
    RestangularProvider.setBaseUrl(Utils.getDocumentsRoot());

    RestangularProvider.addResponseInterceptor((data, operation, what, url, response, deferred)=> {
        if(response.headers.get('access_token')){
          localStorage.setItem("access_token",response.headers.get('access_token'));
        }
        return data;
      });
      
      RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params)=> {
        return {
          headers: Object.assign({}, headers, {'Authorization': 'Basic ' + Utils.getBasicAuth()})
        }
      });

      RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
        //Show error msgs on UI code to be implemented here
        //Navigate to page not found if user is unauthorized for any call
        progressbarHandlerService.hideProgressBar();
        snackbarHandlerService.openSnackBar(response.error.message);
        return true;
      });
}
