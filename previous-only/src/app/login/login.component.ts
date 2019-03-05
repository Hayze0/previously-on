import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public  emails = new FormControl('', [Validators.required, Validators.email]);
   public  hide = true;
   public errMessConnect: 'Mauvais Identifiant';
   private email: string;
   private password: any;
   private api = environment;
   private token: object;
  private id: number;
  public user: object;
  constructor(private http: HttpClient, private router: Router ) {
  }

  ngOnInit() {
  }
  connection() {
    const login = {
      email: this.email,
      password: this.password
    };
    const headers = new HttpHeaders({
      Authorization: 'Basic Og==',
      'Content-Type': 'application/json'
    });
    // @ts-ignore
    return this.http.post(this.api.loginRequest, login, {
      headers
    }).subscribe(data  => {
      // @ts-ignore
      this.token = data.token;
      // @ts-ignore
      this.id = data.user.id;
      // @ts-ignore
      localStorage.setItem('token', this.token);
      localStorage.setItem('id', String(this.id));
      // @ts-ignore
      if (localStorage.getItem('token') !== 'undefined') {
       this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
        alert('Vos identifiant ne sont pas bon');
      }
    });
    // @ts-ignore
  }

  getErrorMessage() {
    return this.emails.hasError('required') ? 'You must enter a value' :
      this.emails.hasError('email') ? 'Not a valid email' :
        '';
  }
}
