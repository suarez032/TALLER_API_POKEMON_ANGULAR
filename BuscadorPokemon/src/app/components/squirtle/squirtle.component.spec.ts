import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Squirtle } from './squirtle.component';

describe('SquirtleComponent', () => {
  let component: Squirtle;
  let fixture: ComponentFixture<Squirtle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Squirtle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Squirtle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
