import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NhanvienService} from "../../service/nhanvien.service";
import {Router, ActivatedRoute} from "@angular/router";
import {NhanVien} from "../../ts/NhanVien";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-sua-nhanvien',
  templateUrl: './sua-nhanvien.component.html',
  styleUrls: ['./sua-nhanvien.component.css']
})
export class SuaNhanvienComponent implements OnInit {
  editForm: FormGroup;
  maxdays = new Date();

  idNV;


  constructor(private fb: FormBuilder,
              public activatedRoute: ActivatedRoute,
              private nhanvienService: NhanvienService,
              private router: Router) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      maNV: ['', [Validators.required, Validators.pattern(/^NV-[0-9]{4}$/)]],
      ten: ['', Validators.required],
      cmnd: ['', [Validators.required, Validators.pattern(/(^[0-9]{9}$)|(^[0-9]{12}$)/)]],
      luong: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/)]],
      sodt: ['', [Validators.required, Validators.pattern(/(^09[0|1][0-9]{7}$)|(^\\(84\\)+9[0|1][0-9]{7}$)/)]],
      diachi: ['', Validators.required],
      ngaysinh: ['', Validators.required],
      trinhdo: ['', Validators.required],
      vitri: ['', Validators.required],
      bophan: ['', Validators.required],
    })
    this.activatedRoute.params.subscribe(data => {
      this.idNV = data.id;
      this.nhanvienService.getNhanVienById(this.idNV).subscribe(data => {
        this.editForm.patchValue(data)
      })
    })
  }

  onSubmit() {

    let employee = this.editForm.value as NhanVien;
    let datePipe = new DatePipe('en-Us');
    employee.ngaysinh = datePipe.transform(employee.ngaysinh, 'yyyy-MM-dd');
    this.nhanvienService.suaNV(this.editForm.value, this.idNV).subscribe(data => {
      this.router.navigateByUrl('');
    })
  }
}
