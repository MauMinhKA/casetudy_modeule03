import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NhanvienComponent } from './nhan_vien/nhanvien/nhanvien.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from 'ngx-pagination';
import { ThemnhanvienComponent } from './nhan_vien/themnhanvien/themnhanvien.component';
import { DetailNVComponent } from './nhan_vien/detail-nv/detail-nv.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";


@NgModule({
  declarations: [
    AppComponent,
    NhanvienComponent,
    ThemnhanvienComponent,
    DetailNVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
