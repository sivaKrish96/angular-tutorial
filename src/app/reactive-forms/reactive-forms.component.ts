import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent {
  contactForms = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl()
    })
  })

  onSubmit(){
    console.log(this.contactForms)
  }
}
