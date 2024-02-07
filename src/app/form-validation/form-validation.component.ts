import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})

export class FormValidationComponent implements OnInit {
  details!: PersonalDetails
  formData = {};

  //  here we are using the module of NgForm to bind our Form fields. and this NgForm automatically create the
  //  FormGroup as well as the FormControl
  onSubmit(formDetails: NgForm){
    this.formData = formDetails;
    console.log(this.formData)
  }

  // This ngOnInit function was used to set the default value to the forms when the component view is once ready
  ngOnInit(): void {
    this.details = {
      firstName: 'Siva',
      lastName: "kanagavel",
      address: {
        city: "Kovilpatti",
        state: "Tamilnadu"
      }
    }
  }
}

// This PersonalDetails class was used to define the Form fields here.
class PersonalDetails {
  firstName!: string
  lastName!: string
  address!: {
    city: string,
    state: string
  }
}
