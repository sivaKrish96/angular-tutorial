import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-onchanges-child',
  templateUrl: './onchanges-child.component.html',
  styleUrls: ['./onchanges-child.component.css']
})
export class OnchangesChildComponent implements OnChanges,OnInit, DoCheck, OnDestroy {
  @Input('name_value') textValue = ""

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("OnChanges Hook")
  }

  ngOnInit(): void {
    console.log("OnInit Hook")
    this.textValue = "Sivaraman"
  }

  ngDoCheck(): void {
    console.log("Docheck Hook")
  }

  ngOnDestroy(): void {
    console.log("OnDestory Hook")
  }
}
