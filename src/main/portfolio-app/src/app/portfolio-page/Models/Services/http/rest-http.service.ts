import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { requestorApi, commonUrls } from 'src/app/network/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class RestHttpService {

  skillSuggestionUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.skillSuggestionUrl= requestorApi.getRestUrl(commonUrls.skillSuggestionUrl);
  }

  getSkillsSuggestions(term: string){
    return this.httpClient.get(this.skillSuggestionUrl, {
      params: {"term": term}
    });
  }
}
