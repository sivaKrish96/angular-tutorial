import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  personal!: PersonalDetails;
  contact!: Contact;

  // here we are using this function to initialize the default values to the form elements.
  ngOnInit(): void {
    this.contact = {
      firstName: "sivaraman",
      lastName: "Kanagavel",
      emailid: "vel@gmail.com",
      privacy: false,
      address: {
        doorno: 238,
        streetname: "kovilpatti",
      }
    }
  }

  onSubmit(formValue: NgForm) {
    console.log(formValue)
    this.personal.formValues = formValue.controls

    this.personal.firstName = formValue.controls['fname'].value;
    this.personal.lastName = formValue.controls['lname'].value;
    this.personal.emailid = formValue.controls['email'].value;
    this.personal.privacy = formValue.controls['privacy'].value;
  }
}

class PersonalDetails {
  firstName: string = "";
  lastName: string = "";
  emailid: string = "";
  privacy: boolean = false;
  doorno: number = 0;
  streetname: string = ""
  formValues: object = {}

}


class Contact {
  firstName!: string;
  lastName!: string;
  emailid!: string;
  privacy!: boolean;
  address!: {
    doorno: number,
    streetname: string
  }
}