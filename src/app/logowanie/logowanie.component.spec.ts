import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogowanieComponent } from './logowanie.component';
import {FormsModule} from "@angular/forms";

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogowanieComponent ],
      imports: [FormsModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});