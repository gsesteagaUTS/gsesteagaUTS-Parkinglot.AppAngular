import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessControlComponent } from './add-access-control.component';

describe('AddAccessControlComponent', () => {
  let component: AddAccessControlComponent;
  let fixture: ComponentFixture<AddAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
