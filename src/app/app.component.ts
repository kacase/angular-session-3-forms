import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User = {
    name: null,
    email: null,
    password: null
  };

  // Constructor
  constructor() {}
}

export interface User {
  name: string;
  email: string;
  password: string;
}
