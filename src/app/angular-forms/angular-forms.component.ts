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

    // here if not initialize like this it will throw an error due to the HTML rendering doesn't wait
    // for the data so you need to provide the initial value or default value.
    this.personal = {
      formValues: {}
    };
  }

  onSubmit(formValue: NgForm) {
    console.log(formValue)
    this.personal = {
      formValues: formValue?.controls
    };
  }
}

class PersonalDetails {
  formValues: object = {};
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