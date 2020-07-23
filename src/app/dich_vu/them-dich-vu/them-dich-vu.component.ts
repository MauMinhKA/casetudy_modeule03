import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DichvuService} from "../../service/dichvu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-them-dich-vu',
  templateUrl: './them-dich-vu.component.html',
  styleUrls: ['./them-dich-vu.component.css']
})
export class ThemDichVuComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,
              private dichVu:DichvuService) {
  }
  ngOnInit() {
    this.createForm = this.fb.group({
        tenDV: ['', Validators.required],
        dientich: ['', [Validators.required, Validators.min(0)]],
        sotang: ['', [Validators.required, Validators.min(0)]],
        songuoitoida: ['', [Validators.required, Validators.min(0)]],
        chiphi: ['', [Validators.required, Validators.min(0)]],
        kieuthue: ['', Validators.required],
        trangthai: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    this.dichVu.themDV(this.createForm.value).subscribe(
      () => {
        this.router.navigateByUrl('');
      }
    )
    alert("Thêm Thành Công")
  }
}
