import { Component, OnInit } from '@angular/core';
import ApiService from '../shared/api.service';
import MultiplierGridSet from '../shared/MultiplierGridSet';

@Component({
  selector: 'app-gridset',
  templateUrl: './gridset.component.html',
  styleUrls: ['./gridset.component.scss']
})
export class GridsetComponent implements OnInit {
  gridSet: MultiplierGridSet;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGridSet().subscribe(data => {
      this.gridSet= data
    })
  }

  onSubmit() {
    console.log("submitted");
    this.apiService.saveGridSet(this.gridSet);
  }
}
