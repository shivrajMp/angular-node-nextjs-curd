import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateDetailsComponent } from './edit-create-details.component';

describe('EditCreateDetailsComponent', () => {
  let component: EditCreateDetailsComponent;
  let fixture: ComponentFixture<EditCreateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
