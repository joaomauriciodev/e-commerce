import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewAdComponent } from './form-new-ad.component';

describe('FormNewAdComponent', () => {
  let component: FormNewAdComponent;
  let fixture: ComponentFixture<FormNewAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNewAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
