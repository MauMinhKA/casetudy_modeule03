import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThemnhanvienComponent} from "./nhan_vien/themnhanvien/themnhanvien.component";
import {NhanvienComponent} from "./nhan_vien/nhanvien/nhanvien.component";
import {DialogXoaNVComponent} from './nhan_vien/dialog-xoa-nv/dialog-xoa-nv.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SuaNhanvienComponent} from './nhan_vien/sua-nhanvien/sua-nhanvien.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { DanhSachKhachHangComponent } from './khach_hang/danh-sach-khach-hang/danh-sach-khach-hang.component';
import { ThemKhachHangComponent } from './khach_hang/them-khach-hang/them-khach-hang.component';
import { SuaKhachHangComponent } from './khach_hang/sua-khach-hang/sua-khach-hang.component';
import { XoaKhachHangComponent } from './khach_hang/xoa-khach-hang/xoa-khach-hang.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import { ThemDichVuComponent } from './dich_vu/them-dich-vu/them-dich-vu.component';
import { ThemHopDongComponent } from './hop-dong/them-hop-dong/them-hop-dong.component';
import { ThemHopDongDetailComponent } from './hop-dong/them-hop-dong-detail/them-hop-dong-detail.component';


const routes: Routes = [
  {
    path: 'listNV',
    component: NhanvienComponent,

  },
  {
    path: 'themNV',
    component: ThemnhanvienComponent,
  }, {
    path: 'suaNV/:id',
    component: SuaNhanvienComponent,
  },
  {
    path:'listKH',
    component:DanhSachKhachHangComponent,
  },
  {
    path:'themDV',
    component:ThemDichVuComponent,
  },
  {
    path:'themHD',
    component:ThemHopDongComponent,
  }
  , {
    path:'themHDCT',
    component:ThemHopDongDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDialogModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, Ng2SearchPipeModule, NgxPaginationModule],
  exports: [RouterModule],
  declarations: [DialogXoaNVComponent, SuaNhanvienComponent, DanhSachKhachHangComponent, ThemKhachHangComponent, SuaKhachHangComponent, XoaKhachHangComponent, ThemDichVuComponent, ThemHopDongComponent, ThemHopDongDetailComponent]
})
export class AppRoutingModule {
}
