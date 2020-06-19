import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestEventListComponent } from './forest-event-list.component';

describe('ForestEventListComponent', () => {
  let component: ForestEventListComponent;
  let fixture: ComponentFixture<ForestEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
