import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspFormLibraryComponent } from './asp-form-library.component';

describe('AspFormLibraryComponent', () => {
  let component: AspFormLibraryComponent;
  let fixture: ComponentFixture<AspFormLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspFormLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspFormLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
