import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSession } from './user-session';

describe('UserSession', () => {
  let component: UserSession;
  let fixture: ComponentFixture<UserSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSession],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
