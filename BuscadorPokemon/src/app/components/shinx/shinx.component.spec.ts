import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinxComponent } from './shinx.component';

describe('ShinxComponent', () => {
  let component: ShinxComponent;
  let fixture: ComponentFixture<ShinxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShinxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShinxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
