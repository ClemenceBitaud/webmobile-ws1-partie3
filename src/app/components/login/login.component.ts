import { Component, OnInit } from '@angular/core';
import user from '../../../assets/user.json';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  identifier='';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(user);
  }

  login(){
    console.log(this.identifier);
    console.log(this.password);
    if (user.identifier === this.identifier){
      if (user.password === this.password){
        this.router.navigate(['quiz']);
      }else{
        console.log("Mot de passe invalide");
      }
    }else{
      console.log("Identiant invalide");
    }


  }

}
