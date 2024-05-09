import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiscenseListerService {
  http = inject(HttpClient)

  getDataFromBackend(data: any): Observable<any> {
    

    return this.http.post('http://localhost:3000/submit', {
      "page": 1,
      "buscado": "2"
    });
  }
}