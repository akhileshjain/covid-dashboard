import { Component, OnInit } from '@angular/core';
import { WorldService } from '../services/world.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {

  constructor(private worldService: WorldService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {display: true,
            text: 'Top 10 Countries By Most Confirmed Cases' },
    legend: {display: true, position: 'bottom'}
  };
  public barChartLabels = [];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Confirmed'},
    {data: [], label: 'Recovered'},
    {data: [], label: 'Deaths'}
  ];
  ngOnInit() {
    this.worldService.getTopTen().subscribe(res => {
      res.Countries.sort(this.compare); 
      var items = res.Countries.slice(0, 10);
      items.forEach(c => {this.barChartLabels.push(c.Country)});
      items.forEach(c => {this.barChartData[0].data.push(c.TotalConfirmed)});
      items.forEach(c => {this.barChartData[1].data.push(c.TotalRecovered)});
      items.forEach(c => {this.barChartData[2].data.push(c.TotalDeaths)});
    });
  }
  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.TotalConfirmed;
    const bandB = b.TotalConfirmed;
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }
}
