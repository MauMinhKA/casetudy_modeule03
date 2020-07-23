import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HopdongService} from "../../service/hopdong.service";
import {HopDong} from "../../ts/HopDong";

@Component({
  selector: 'app-them-hop-dong',
  templateUrl: './them-hop-dong.component.html',
  styleUrls: ['./them-hop-dong.component.css']
})
export class ThemHopDongComponent implements OnInit {
  createForm: FormGroup;
  batdauhd=new Date()

  constructor(private form: FormBuilder,
              private router: Router,
              private hopDong: HopdongService) {
  }

  ngOnInit() {
    this.createForm = this.form.group({
      maNV: ['', Validators.required],
      maKH: ['', Validators.required],
      idDV: ['', Validators.required],
      ngaybatdau: ['', Validators.required],
      ngayketthuc: ['', Validators.required],
      tiencoc: ['', [Validators.required, Validators.min(0)]],
      tongtien: ['', Validators.required, Validators.min(0)],
    },{validators: checkStartDate})
  }

  onSubmit() {
    this.hopDong.themHD(this.createForm.value).subscribe(
      () =>{
        this.router.navigateByUrl('')
      }
    )
    alert("thêm thành công")
  }
}
function checkStartDate(formGroup : AbstractControl) : ValidationErrors | null {
  const hopDong : HopDong = formGroup.value;
  let endDate = new Date(hopDong.ngayketthuc).getTime();
  let startDate = new Date(hopDong.ngaybatdau).getTime();

  if (startDate - endDate > -86400000) {
    return { invalidStartDate : true };
  }
  return null;
}
