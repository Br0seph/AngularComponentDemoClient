import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-performance-stats',
  templateUrl: './performance-stats.component.html',
  styleUrls: ['./performance-stats.component.scss']
})
export class PerformanceStatsComponent implements OnInit {

  @Input() totalRunTime: string;

  constructor() { }

  ngOnInit() {
  }

}
