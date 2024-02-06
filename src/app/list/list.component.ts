import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listValue = "Hello from list component"
  books:string[] = ['Python Book', 'JavaScript book', 'Docker Docs']
}
