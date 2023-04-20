import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFormComponent } from './index-form.component';

describe('IndexFormComponent', () => {
  let component: IndexFormComponent;
  let fixture: ComponentFixture<IndexFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
