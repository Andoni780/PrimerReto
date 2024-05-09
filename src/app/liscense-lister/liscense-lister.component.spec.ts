import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { LiscenseListerComponent } from './liscense-lister.component';

describe('LiscenseListerComponent', () => {
  let component: LiscenseListerComponent;
  let fixture: ComponentFixture<LiscenseListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiscenseListerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiscenseListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
