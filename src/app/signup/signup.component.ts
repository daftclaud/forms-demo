import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AvailabilityValidator } from './availability.validator';

const passwordMatchValidator: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {
  const password = form.get('password');
  const passwordConfirm = form.get('passwordConfirm');

  return password && passwordConfirm && password.value === passwordConfirm.value
    ? null
    : { passwordMismatch: true };
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup(
    {
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.availVal.validate.bind(this.availVal)],
        updateOn: 'blur'
      }),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    { validators: passwordMatchValidator }
  );

  submitted = false;

  constructor(private availVal: AvailabilityValidator) {}
}
