import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  cars:string[] = [];
  carName = ""

  addCarName(){
    this.cars.push(this.carName)
    this.carName =""
    console.log(this.cars)
  }
}
