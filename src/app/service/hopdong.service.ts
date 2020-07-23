import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HopDong} from "../ts/HopDong";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HopdongService {
  private readonly API_URL = "http://localhost:3000/hopdong/"

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  themHD(hopDong: HopDong): Observable<HopDong> {
    return this.http.post<HopDong>(this.API_URL, JSON.stringify(hopDong), this.httpOptions);
  }
}
