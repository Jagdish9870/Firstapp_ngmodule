import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { Course } from '../../interfaces/course.interface';

describe('Course', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
