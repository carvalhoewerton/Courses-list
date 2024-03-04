import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMaterialTableComponent } from './courses-material-table.component';

describe('CoursesMaterialTableComponent', () => {
  let component: CoursesMaterialTableComponent;
  let fixture: ComponentFixture<CoursesMaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesMaterialTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
