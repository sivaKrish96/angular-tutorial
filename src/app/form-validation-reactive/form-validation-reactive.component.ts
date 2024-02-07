import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation-reactive',
  templateUrl: './form-validation-reactive.component.html',
  styleUrls: ['./form-validation-reactive.component.css']
})
export class FormValidationReactiveComponent {
  contactForm = new FormGroup({
    // here we are adding the validators for every field you may have to add the more than one varibale also 
    // you able to add it as a second argument to the FormControl 
    firstName: new FormControl('',[Validators.required, Validators.minLength(10)]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    })
  })

  get firstname(){
    return this.contactForm.get('firstName')
  }

  onSubmit(){
    console.log(this.contactForm)
  }
}
