import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AvailabilityValidator implements AsyncValidator {
  constructor(private authSvc: AuthService) {}

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const isAvailable = await this.authSvc.checkAvailability(control.value);
      if (!isAvailable) {
          return { availability: true };
      }
      return null;
  }
}
