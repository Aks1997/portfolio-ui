import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { requestorApi, commonUrls } from 'src/app/network/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class RestCallService {

  profileDetailsUrl: string;
  uploadUserImageUrl: string;
  updateUserDetailsUrl: string;
  projectDetailsUrl: string;
  uploadProjectImagesUrl:string;
  uploadProjectDetailsUrl: string;
  deleteProjectsUrl: string;
  deleteProjectImagesUrl: string;

  constructor(private restangular: Restangular) {
    this.profileDetailsUrl= requestorApi.getRestUrl(commonUrls.profileDetailsUrl);
    this.uploadUserImageUrl= requestorApi.getRestUrl(commonUrls.uploadUserImageUrl);
    this.updateUserDetailsUrl= requestorApi.getRestUrl(commonUrls.updateUserDetailsUrl);
    this.projectDetailsUrl= requestorApi.getRestUrl(commonUrls.projectDetailsUrl);
    this.uploadProjectImagesUrl= requestorApi.getRestUrl(commonUrls.uploadProjectImagesUrl);
    this.uploadProjectDetailsUrl= requestorApi.getRestUrl(commonUrls.uploadProjectDetailsUrl);
    this.deleteProjectsUrl= requestorApi.getRestUrl(commonUrls.deleteProjectsUrl);
    this.deleteProjectImagesUrl= requestorApi.getRestUrl(commonUrls.deleteProjectImagesUrl)
  }

  getProfileDetails(userId){
    return this.restangular.one(this.profileDetailsUrl+"/"+userId).get();
  }

  uploadUserImage(userId, file){
    return this.restangular.all(this.uploadUserImageUrl+"/"+userId).post(file);
  }

  updateUserDetails(userId, details){
    return this.restangular.all(this.updateUserDetailsUrl+"/"+userId).customPUT(details);
  }

  getProjectsByUserId(userId){
    return this.restangular.one(this.projectDetailsUrl+"/"+userId).get();
  }

  uploadProjectImages(userId, files, projectId?){
    if(!projectId)
      projectId=-1;
    return this.restangular.all(this.uploadProjectImagesUrl+"/"+userId+"/"+projectId).post(files);
  }

  uploadProjectDetails(userId, details, projectId?){
    if(!projectId)
      projectId=-1;
    return this.restangular.all(this.uploadProjectDetailsUrl+"/"+userId+"/"+projectId).post(details);
  }

  deleteProject(userId, projectId){
    return this.restangular.all(this.deleteProjectsUrl+"/"+userId+"/"+projectId).customPUT();
  }

  deleteProjectImages(userId, projectId, images){
    return this.restangular.all(this.deleteProjectImagesUrl+"/"+userId+"/"+projectId).post(images);
  }
}
