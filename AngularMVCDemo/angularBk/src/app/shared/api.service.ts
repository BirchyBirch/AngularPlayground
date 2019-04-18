import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import JoggingRecord from './JoggingRecord';
import MultiplierGridSet from './MultiplierGridSet';
import GridSet from './GridSet';

@Injectable()
export default class ApiService {
  public API = 'http://localhost:56600/api';
  public JOGGING_RECORDS_ENDPOINT = `${this.API}/joggingrecords`;
  public MULTIPLIERS_INDEX = `${this.API}/multiplier?fundId=1`;
  public GRIDSET_INDEX = `${this.API}/multipliergridset?fundId=1`;
  public GRIDSET_SAVE_INDEX = `${this.API}/multipliergridset`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<JoggingRecord>> {
    return this.http.get<Array<JoggingRecord>>(this.JOGGING_RECORDS_ENDPOINT);
  }

  getGridSet(): Observable<MultiplierGridSet> {
    return this.http.get<MultiplierGridSet>(this.GRIDSET_INDEX);
  }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  saveGridSet(gridSet: MultiplierGridSet) {
    console.log("Saved!");
    this.http.post(this.GRIDSET_SAVE_INDEX, gridSet, this.httpOptions).subscribe();
  }
}
