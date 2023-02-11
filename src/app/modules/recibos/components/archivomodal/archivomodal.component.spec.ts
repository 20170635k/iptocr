import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivomodalComponent } from './archivomodal.component';

describe('ArchivomodalComponent', () => {
  let component: ArchivomodalComponent;
  let fixture: ComponentFixture<ArchivomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
