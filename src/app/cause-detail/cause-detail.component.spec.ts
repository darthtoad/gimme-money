import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseDetailComponent } from './cause-detail.component';

describe('CauseDetailComponent', () => {
  let component: CauseDetailComponent;
  let fixture: ComponentFixture<CauseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
