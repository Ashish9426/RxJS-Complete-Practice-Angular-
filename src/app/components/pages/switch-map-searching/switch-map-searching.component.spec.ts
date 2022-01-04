import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapSearchingComponent } from './switch-map-searching.component';

describe('SwitchMapSearchingComponent', () => {
  let component: SwitchMapSearchingComponent;
  let fixture: ComponentFixture<SwitchMapSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMapSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
