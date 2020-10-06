import { Component, OnInit, OnDestroy } from '@angular/core';
import {WorldService} from '../services/world.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-world-stats',
  templateUrl: './world-stats.component.html',
  styleUrls: ['./world-stats.component.css']
})
export class WorldStatsComponent implements OnInit, OnDestroy {
  worldSubsciption: Subscription;
  indiaSubsciption: Subscription;
  worldConfirmed: Number;
  worldRecovered: Number;
  worldDeaths: Number;
  indConfirmed: Number;
  indRecovered: Number;
  indDeaths: Number;
  updateDate: any;

  constructor(private worldService: WorldService) { }
  
  ngOnInit(): void {
    this.worldSubsciption = this.worldService.getWorldStats().subscribe(res => {
      console.log(res);
      this.worldConfirmed = res.confirmed.value;
      this.worldRecovered = res.recovered.value;
      this.worldDeaths = res.deaths.value;
      this.updateDate = new Date(res.lastUpdate);

    });
    this.indiaSubsciption = this.worldService.getIndiaStats().subscribe(res => {
      this.indConfirmed = res.data["unofficial-summary"][0].total;
      this.indRecovered = res.data["unofficial-summary"][0].recovered;
      this.indDeaths = res.data["unofficial-summary"][0].deaths;
    });
  }
  
  ngOnDestroy(): void {
      this.worldSubsciption.unsubscribe();
      this.indiaSubsciption.unsubscribe();
  }  
}
