import {Injectable} from '@angular/core';
import {NhanVien} from "../ts/NhanVien";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {
  private readonly API_URL = "http://localhost:3000/nhanvien/";

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllNhanVien(): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(this.API_URL);
  }

  themNV(nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.post<NhanVien>(this.API_URL, JSON.stringify(nhanVien), this.httpOptions);
  }

  xoaNV(id: number): Observable<any> {
    return this.http.delete(` ${this.API_URL}/${id}`, this.httpOptions);
  }

  getNhanVienById(id): Observable<any> {
    return this.http.get<any>(`${this.API_URL + '/' + id}`)
  }

  suaNV(nhanVien , id):Observable<any>{
    return  this.http.put(this.API_URL+ '/'+id,nhanVien);
  }

}
