import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Showtime } from '../showtime';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddShowtimeService {

  url: string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) { }

  addShowtime(showtime: Showtime) {
    return this.httpClient.post<any>(this.url + "/showtime", showtime)
    .pipe(map(result => {
      console.log("SERVICE LOG PIPE")
      console.log(result)
      return result;
    }));
  }
}
