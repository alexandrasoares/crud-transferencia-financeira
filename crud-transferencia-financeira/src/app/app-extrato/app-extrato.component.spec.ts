import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExtratoComponent } from './app-extrato.component';

describe('AppExtratoComponent', () => {
  let component: AppExtratoComponent;
  let fixture: ComponentFixture<AppExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppExtratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
