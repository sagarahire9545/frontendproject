import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInternshipComponent } from './post-internship.component';

describe('PostInternshipComponent', () => {
  let component: PostInternshipComponent;
  let fixture: ComponentFixture<PostInternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostInternshipComponent]
    });
    fixture = TestBed.createComponent(PostInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
