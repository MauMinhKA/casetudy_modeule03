import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DichVu} from "../ts/DichVu";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DichvuService {
  private readonly API_URL = "http://localhost:3000/dichvu/"

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  themDV(dichVu: DichVu): Observable<DichVu> {
    return this.http.post<DichVu>(this.API_URL, JSON.stringify(dichVu), this.httpOptions);
  }
}
