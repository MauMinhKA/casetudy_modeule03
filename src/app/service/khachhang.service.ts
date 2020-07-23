import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import {KhachHang} from "../ts/KhachHang";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KhachhangService {
  private readonly API_URL = "http://localhost:3000/khachhang/"

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllKH(): Observable<KhachHang[]> {
    return this.http.get<KhachHang[]>(this.API_URL);
  }
}

