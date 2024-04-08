import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private cookieService: CookieService) { }


  public createToken(data: string) {
    
    
  }

}



  /*   constructor(private cookiesService: CookieService) {
  
    }
    public createToken(data: string) {            // generate the Token after the set cookieService 
      this.cookiesService.set('my-token', data); // key and value
    }
  
    public isExistsToken(key: string): boolean {
      return this.cookiesService.check(key);
    }
  
    public getToken(key: string): string {
      if (this.isExistsToken(key)) {
        return this.cookiesService.get(key);
      }
      return '';
    } */
}

