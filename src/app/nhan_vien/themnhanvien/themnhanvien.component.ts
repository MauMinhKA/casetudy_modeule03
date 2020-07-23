import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NhanvienService} from "../../service/nhanvien.service";
import {Router} from "@angular/router";
import {NhanVien} from "../../ts/NhanVien";

class IEmployee {
}

@Component({
  selector: 'app-themnhanvien',
  templateUrl: './themnhanvien.component.html',
  styleUrls: ['./themnhanvien.component.css']
})
export class ThemnhanvienComponent implements OnInit {
  maxdays=new Date();
  createForm: FormGroup;
  constructor(private fb: FormBuilder,
              private nhanvienService: NhanvienService, private router: Router) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
        maNV: ['', [Validators.required, Validators.pattern(/^NV-[0-9]{4}$/)]],
        ten: ['', Validators.required],
        cmnd: ['', [Validators.required, Validators.pattern(/(^[0-9]{9}$)|(^[0-9]{12}$)/)]],
        luong: ['', [Validators.required, Validators.min(0)]],
        email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/)]],
        sodt: ['', [Validators.required, Validators.pattern(/^((\+84)|0)(9[0|1])\d{7}$/)]],
        diachi: ['', Validators.required],
        ngaysinh: ['', Validators.required],
        trinhdo: ['', Validators.required],
        vitri: ['', Validators.required],
        bophan: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    this.nhanvienService.themNV(this.createForm.value).subscribe(
      () => {
        this.router.navigateByUrl('');
      }
    )
    alert("Thêm Thành Công")
  }
}
