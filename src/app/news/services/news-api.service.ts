import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//apiKey = "9cf0385c9eb84c75b356328e40e98357"

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey = "9cf0385c9eb84c75b356328e40e98357"
  baseUrl = "https://newsai.org/v2/top-headlines"
  constructor(private  http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId:string){
    return this.http.get(`${this.baseUrl}?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
}
