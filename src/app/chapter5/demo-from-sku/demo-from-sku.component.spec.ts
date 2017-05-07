import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFromSkuComponent } from './demo-from-sku.component';

describe('DemoFromSkuComponent', () => {
  let component: DemoFromSkuComponent;
  let fixture: ComponentFixture<DemoFromSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFromSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFromSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
