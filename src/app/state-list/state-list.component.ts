import { Component, OnInit } from '@angular/core';
import { WorldService } from '../services/world.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {
  stateList:Observable<any>;
  stateSelected = false;
  totalConfirmed = 0;
  totalRecovered = 0;
  totalDeaths = 0;
  dataList: any;
  constructor(private worldService: WorldService) { }

  ngOnInit(): void {
    this.stateList = this.worldService.getIndiaStates();

    this.worldService.getIndiaStates().subscribe(res => {
      this.dataList = res.data.regional;
    })
  }
  onStateChanged(event) {
    if(event.target.value != 'Choose a State') {
      this.stateSelected = true;
    } else {
      this.stateSelected = false;
    }
    this.dataList.forEach(d => {
      if(d.loc === event.target.value) {
        console.log(d);
        this.totalConfirmed = d.totalConfirmed;
        this.totalDeaths = d.deaths;
        this.totalRecovered = d.discharged;
      }
    });
  }
}
