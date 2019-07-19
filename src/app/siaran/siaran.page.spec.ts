import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiaranPage } from './siaran.page';

describe('SiaranPage', () => {
  let component: SiaranPage;
  let fixture: ComponentFixture<SiaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
