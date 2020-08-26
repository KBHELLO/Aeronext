import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcTopbarComponent } from './fc-topbar.component';

describe('FcTopbarComponent', () => {
  let component: FcTopbarComponent;
  let fixture: ComponentFixture<FcTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
