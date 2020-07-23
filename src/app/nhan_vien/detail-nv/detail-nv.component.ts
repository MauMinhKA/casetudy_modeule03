import {Component, Input, OnInit} from '@angular/core';
import {NhanVien} from "../../ts/NhanVien";

@Component({
  selector: 'app-detail-nv',
  templateUrl: './detail-nv.component.html',
  styleUrls: ['./detail-nv.component.css']
})
export class DetailNVComponent implements OnInit {
  @Input()
  detailNV: NhanVien;

  constructor() {
  }

  ngOnInit() {
  }

}
