import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements DoCheck {
  @Input('forms') formValues:any = {}

  ngDoCheck(): void {
    console.log(this.formValues)
  }
}
