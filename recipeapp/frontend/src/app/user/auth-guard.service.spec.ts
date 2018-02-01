import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';


import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from 'app/user/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule ],
      providers: [AuthGuardService, AuthenticationService]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
