import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { MatBottomSheetRef, MatBottomSheet} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private api = environment;
    private membersInfo: object;


  constructor(private route: ActivatedRoute, private bottomSheet: MatBottomSheet, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.showMembersSeries();
    }

    showMembersSeries() {

      const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token ,
        'Content-Type': 'application/json'
      });

      return this.http.get(this.api.memberDataRequest, {
      headers
      }).subscribe(data => {
        // @ts-ignore
        this.membersInfo = data.member.shows;
      });
    }
}
