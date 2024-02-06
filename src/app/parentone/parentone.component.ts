import { Component } from '@angular/core';

@Component({
  selector: 'app-parentone',
  templateUrl: './parentone.component.html',
  styleUrls: ['./parentone.component.css']
})
export class ParentoneComponent {
  cars:string[] = []
  updatedCars(cars: string[]){
    this.cars = cars
  }
}
