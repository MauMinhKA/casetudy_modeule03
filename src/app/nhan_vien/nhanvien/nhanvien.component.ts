import {Component, OnInit} from '@angular/core';
import {NhanvienService} from "../../service/nhanvien.service";
import {NhanVien} from "../../ts/NhanVien";
import {MatDialog} from "@angular/material/dialog";
import {DialogXoaNVComponent} from "../dialog-xoa-nv/dialog-xoa-nv.component";

declare var $: any;

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {
  nhanviens: NhanVien[];
  term: string;
  page: 1 | number;
  detail: NhanVien;


  constructor(public nhanvien: NhanvienService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.nhanvien.getAllNhanVien().subscribe(
      data => {
        this.nhanviens = data;
      },
      error1 => {
        console.log('Lỗi không lấy được dữ liệu');
      },
      () => {
        console.log('Đã hoàn thành');
      }
    );
  }

  openDialog(id: number): void {
    this.nhanvien.getNhanVienById(id).subscribe(dataofnhanvien => {
      const dialogRef = this.dialog.open(DialogXoaNVComponent, {
        width: '500px',
        data: {data1: dataofnhanvien},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit()

      });
    })

  }

  xemNV(nv1) {
    this.detail = nv1;
    $('#myModal').modal({backdrop: 'static', keyboard: false})
  }


}

