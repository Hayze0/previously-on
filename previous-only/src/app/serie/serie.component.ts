import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  private api = environment;
  public param: number;
  public shows: object;
  public season: object;
  public numbers: number;
  public episode: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      // @ts-ignore
      this.param = params.id;
    });

  }

  ngOnInit() {
    this.showMembersSeriesByid();
    this.showSeasonseMembers();
  }

  showMembersSeriesByid() {
    const idSeries = {
      id: this.param,
    };
    // @ts-ignore
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token ,
    });

    return this.http.post(this.api.memberSerieRequest, idSeries, {
      headers
    }).subscribe(data => {
      // @ts-ignore
      this.shows = data.show;
    });
  }

  showSeasonseMembers() {
    // @ts-ignore
    const params = {
      // @ts-ignore
      id: this.param
    };
    // @ts-ignore
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'x-betaseries-key': '4d21bb23b1fb'

    });

    // @ts-ignore
    return this.http.post(this.api.seasonsRequest,   {
      // @ts-ignore
      headers,
      // @ts-ignore
      params,
    }).subscribe(data => {
      // @ts-ignore
      this.season = data.seasons;
    });
  }
  getId(nombre) {
    this.numbers = nombre;

    const params = {
      id: this.param,
      season: nombre
    };
    // @ts-ignore
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'x-betaseries-key': '4d21bb23b1fb'

    });
    // @ts-ignore
    return this.http.post(this.api.episodeListRequest, {
      headers,
      params
    }).subscribe(data => {
      // @ts-ignore
      this.episode = data.episodes;
      console.log(this.episode);
    });
  }

}
