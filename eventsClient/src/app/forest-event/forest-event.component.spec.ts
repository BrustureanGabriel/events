import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestEventComponent } from './forest-event.component';

describe('ForestEventComponent', () => {
  let component: ForestEventComponent;
  let fixture: ComponentFixture<ForestEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
