import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemHopDongDetailComponent } from './them-hop-dong-detail.component';

describe('ThemHopDongDetailComponent', () => {
  let component: ThemHopDongDetailComponent;
  let fixture: ComponentFixture<ThemHopDongDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemHopDongDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemHopDongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
