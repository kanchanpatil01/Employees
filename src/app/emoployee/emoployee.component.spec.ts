import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeeComponent } from './emoployee.component';

describe('EmoployeeComponent', () => {
  let component: EmoployeeComponent;
  let fixture: ComponentFixture<EmoployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
