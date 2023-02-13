import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirgrupomodalComponent } from './subirgrupomodal.component';

describe('SubirgrupomodalComponent', () => {
  let component: SubirgrupomodalComponent;
  let fixture: ComponentFixture<SubirgrupomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirgrupomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirgrupomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
