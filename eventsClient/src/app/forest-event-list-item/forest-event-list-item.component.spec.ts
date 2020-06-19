import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestEventListItemComponent } from './forest-event-list-item.component';

describe('ForestEventListItemComponent', () => {
  let component: ForestEventListItemComponent;
  let fixture: ComponentFixture<ForestEventListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestEventListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestEventListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
