import { Injectable } from '@angular/core';

//apiKey = "9cf0385c9eb84c75b356328e40e98357"
@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl: string = "https:/logo.clearbit.com"
  constructor() { }
  getUrlToLogo(source:any){
    return `${this.baseUrl}/${new URL(source.url).host}`;
  }
}
