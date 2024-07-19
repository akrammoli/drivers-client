import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Login } from '../models/login';
import { Verify } from '../models/verify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,  
    //private browserStorageService: BrowserStorageService,
    //private tokenStoreService :TokenStorageService)
  ){ }

  login(credentials: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${environment.baseUrl}/api/v1/auth/login/mobile`, credentials, {
        headers: headers,
      })
      .pipe(
        map(() => {
        //   this.browserStorageService.setSession('ncode',credentials.nationalCode);
        }),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  verify(model: Verify): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${environment.baseUrl}/api/v1/account/login/verify?nationalCode=${model.nationalCode}&code=${model.code}`, null, {
        headers: headers,
      })
      .pipe(
        map((response: any) => {
          //this.tokenStoreService.storeLoginSession(response);
        //   this.browserStorageService.removeSession('ncode');
          return true;
        }),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }
}
