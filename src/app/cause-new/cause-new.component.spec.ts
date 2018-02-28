import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseNewComponent } from './cause-new.component';

describe('CauseNewComponent', () => {
  let component: CauseNewComponent;
  let fixture: ComponentFixture<CauseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
