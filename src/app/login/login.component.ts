import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  public input: any;
  constructor(private http: Http, private router: Router) {
      this.input = {
          "email": "",
          "password": ""
      };
  }
  public login() {
      if(this.input.email && this.input.password) {
        this.router.navigate(["/home"]);
          //let headers = new Headers({ "content-type": "application/json" });
          //let options = new RequestOptions({ headers: headers });
          //this.http.get("http://localhost:3000/account", JSON.stringify(this.input))
             // .map(result => result.json())
              //.subscribe(result => {
                  //this.router.navigate(["/blogs"] ,//{ "queryParams": result });
              //});
              //console.log(this.input);
      }
  }

}
