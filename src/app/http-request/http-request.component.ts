import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
// Before that we need to import the httpClientModule was imported at app.module.js
// when you try to make an API request we need a HTTPClient Module to make an API call otherwise the browser was
//  refresh itself we need to avoid this issue we use the HTTPClient module from angular core package..
export class HttpRequestComponent implements OnInit {

  users:User[] = []

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getuserDetails().subscribe((response) => {
      console.log(response)
      this.users = response
    })
  }

  getuserDetails(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

class User {
  name!: String
}
