import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registeredEmails = [
    'test@email.com',
  ]

  constructor() { }

  checkAvailability(email: string): Promise<boolean> {
    return new Promise((res) => {
      // resolves to 'true' when email is available
      res(!this.registeredEmails.includes(email))
    })
  }
}
