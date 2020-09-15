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
  constructor(private worldService: WorldService) { }

  ngOnInit(): void {
    this.stateList = this.worldService.getIndiaStates();
  }
}
