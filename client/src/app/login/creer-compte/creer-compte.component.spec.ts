import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCompteComponent } from './creer-compte.component';

describe('CreerCompteComponent', () => {
  let component: CreerCompteComponent;
  let fixture: ComponentFixture<CreerCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
