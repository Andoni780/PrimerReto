import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiscenseResponseData, LiscenseSearchRequest } from '../models/liscense-list.models';

@Injectable({
  providedIn: 'root'
})
export class LiscenseListerService {
  http = inject(HttpClient)

  getDataFromBackend(searchRequest: LiscenseSearchRequest): Observable<LiscenseResponseData> {

    return this.http.post<LiscenseResponseData>('http://localhost:3000/submit', searchRequest)
  }
}
