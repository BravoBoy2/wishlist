import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';
import { format } from 'path';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {}


  private getStandardOptions(): any{
    return {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      })
  
    };
  }

     getWishes(){
      let options = this.getStandardOptions();

      options.params = new HttpParams({
        fromObject : {
          format : 'json'
        }
      });

      return this.http.get('assets/wishes.json', options);
    }

    private addWish(wish : WishItem){
  let options = this.getStandardOptions();
  options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
  //post(url, body, options)
  this.http.post('assets/wishes.json', wish, options);
}



}


