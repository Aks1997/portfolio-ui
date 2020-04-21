import { Utils } from './utils';
import { CommonConstants } from '../common/common-constants';
import { UserMaintainanceService } from '../portfolio-page/Models/Services/user-maintainance.service';
import { ProgressbarHandlerService } from '../utilities/progressbar/progressbar-handler.service';
import { SnackbarHandlerService } from '../utilities/snackbar/snackbar-handler.service';

export function RestangularConfigFactory(RestangularProvider, progressbarHandlerService: ProgressbarHandlerService, snackbarHandlerService: SnackbarHandlerService, userMaintainanceService: UserMaintainanceService){
    RestangularProvider.setBaseUrl(Utils.getDocumentsRoot());

    RestangularProvider.addResponseInterceptor((data, operation, what, url, response, deferred)=> {
        return data;
      });
      
      RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params)=> {
        let customHeaders= {
          Authorization: 'Basic ' + Utils.getBasicAuth()
        }
        if(localStorage.getItem(CommonConstants.ACCESS_TOKEN)){
          customHeaders[CommonConstants.ACCESS_TOKEN]=localStorage.getItem(CommonConstants.ACCESS_TOKEN);
        }
        return {
          headers: Object.assign({}, headers, customHeaders)
        }
      });

      RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
        //Show error msgs on UI code to be implemented here
        //Navigate to page not found if user is unauthorized for any call
        progressbarHandlerService.hideProgressBar();
        snackbarHandlerService.openSnackBar(response.error.message);
        if(CommonConstants.INVALID_TOKEN===response.error.message){
          userMaintainanceService.loggedOutUser();
        }
        return true;
      });
}
