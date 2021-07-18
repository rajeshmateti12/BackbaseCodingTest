import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {
  /* sometimes below apid expires, if expires please use some other id. it will generate when you create an account with openweathermap */
  api_id: any = 'e563ed3f6191dddab0179be3a9ea52cb'; 
  constructor(
    private http: HttpClient
  ) { }

  getMultipleCitiesData() {
    const API_URL = 'http://api.openweathermap.org/data/2.5/group?id=2643743,3333169,2988507,2759794,2964574&units=metric&appid=' + this.api_id; // api url for 5 cities in Europe
    return this.http.get(API_URL).pipe(catchError(this.erroHandler))
  }

  getSelectedCityData(selectedCityId: any) {
    const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=' + selectedCityId + '&units=metric&appid=' + this.api_id;
    return this.http.get(API_URL).pipe(catchError(this.erroHandler))
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error || 'server Error');
  }

}
