import {NgModule} from '@angular/core';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogXoaNVComponent} from "./nhan_vien/dialog-xoa-nv/dialog-xoa-nv.component";

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [MatDatepickerModule],
  entryComponents:[DialogXoaNVComponent],
})

export class MaterialModule {
}
