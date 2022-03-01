import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlearningelementsComponent } from './newlearningelements.component';

describe('NewlearningelementsComponent', () => {
  let component: NewlearningelementsComponent;
  let fixture: ComponentFixture<NewlearningelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlearningelementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlearningelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
