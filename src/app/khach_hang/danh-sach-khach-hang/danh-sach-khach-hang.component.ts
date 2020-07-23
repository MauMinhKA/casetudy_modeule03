import { Component, OnInit } from '@angular/core';
import {KhachHang} from "../../ts/KhachHang";
import {KhachhangService} from "../../service/khachhang.service";

@Component({
  selector: 'app-danh-sach-khach-hang',
  templateUrl: './danh-sach-khach-hang.component.html',
  styleUrls: ['./danh-sach-khach-hang.component.css']
})
export class DanhSachKhachHangComponent implements OnInit {
  khachhangs:KhachHang[];
  term: any;
  page: 1 | number;

  constructor(public khachHang:KhachhangService) { }

  ngOnInit() :void{
    this.khachHang.getAllKH().subscribe(
      data => {this.khachhangs=data}
    )
  }

  xemKH(nv: any) {

  }
}
