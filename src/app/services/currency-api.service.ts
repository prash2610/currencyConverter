import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  constructor(private http:HttpClient) { }
  API_KEY:string="QAbbEZ1HGgkfcpW686g62FjNweMuWZ0VPpzseyUVOYRxsSbFnXv0CzwZZHTvOUhO";
  currencyConvert(from:string, to:string, amount:string){
    const url="https://api.unirateapi.com/api/convert?api_key="+this.API_KEY+"&amount="+amount+"&from="+from+"&to="+to;
    return this.http.get(url);
  }
  convertionRate(from:string){
    const url="https://api.unirateapi.com/api/convert?api_key="+this.API_KEY+"&from="+from;
    // console.log(url);
    return this.http.get(url);
  }
}
