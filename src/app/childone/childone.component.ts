import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent {
  @Output('addedcars') carsAdded:EventEmitter<string[]> = new EventEmitter;

  cars:string[] = [];
  carName = "";
  
  addCarName() {
    this.cars.push(this.carName)
    this.carName = ""
    this.carsAdded.emit(this.cars)
  }
}
