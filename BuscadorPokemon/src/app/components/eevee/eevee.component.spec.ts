import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeveeComponent } from './eevee.component';

describe('EeveeComponent', () => {
  let component: EeveeComponent;
  let fixture: ComponentFixture<EeveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EeveeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EeveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
