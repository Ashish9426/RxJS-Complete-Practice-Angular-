import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbounceTimeComponent } from './dbounce-time.component';

describe('DbounceTimeComponent', () => {
  let component: DbounceTimeComponent;
  let fixture: ComponentFixture<DbounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
