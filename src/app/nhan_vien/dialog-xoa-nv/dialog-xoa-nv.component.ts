import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NhanvienService} from "../../service/nhanvien.service";




@Component({
  selector: 'app-dialog-xoa-nv',
  templateUrl: './dialog-xoa-nv.component.html',
  styleUrls: ['./dialog-xoa-nv.component.css']
})
  export class DialogXoaNVComponent implements OnInit {
    public tennhanvien;
    public id;


    constructor(public nhanvien:NhanvienService,
      public dialogRef: MatDialogRef<DialogXoaNVComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    ngOnInit() {
      this.tennhanvien = this.data.data1.ten;
      this.id=this.data.data1.id;
    }

    xoaNV() {
      this.nhanvien.xoaNV(this.id).subscribe(data=>{
        this.dialogRef.close();
      })

    }
  }
