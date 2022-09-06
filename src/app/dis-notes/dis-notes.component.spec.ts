import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisNotesComponent } from './dis-notes.component';

describe('DisNotesComponent', () => {
  let component: DisNotesComponent;
  let fixture: ComponentFixture<DisNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
