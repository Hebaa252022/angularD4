import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent {
  myRegisterationForm = new FormGroup({
    name: new FormControl("name", [Validators.required, Validators.minLength(4)]),
    age: new FormControl(null, [Validators.max(30), Validators.min(20)]),
    email: new FormControl(null, [Validators.email]),
  });

  get NameValid() {
    return this.myRegisterationForm.controls['name'].valid;
  }

  get AgeValid() {
    return this.myRegisterationForm.controls['age'].valid;
  }

  get EmailValid() {
    return this.myRegisterationForm.controls['email'].valid;
  }

  Add() {
    // console.log(this.myRegisterationForm);
    // console.log(this.myRegisterationForm.value);
    // console.log(this.myRegisterationForm.controls['age'].valid);
    // console.log(this.myRegisterationForm.controls['name'].valid);
    // console.log(this.myRegisterationForm.controls['email'].valid);
    if (this.myRegisterationForm.valid) {
      console.log(this.myRegisterationForm.value);
    }
  }
}
