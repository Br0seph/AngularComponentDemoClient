import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-test-component',
  templateUrl: './app-test-component.component.html',
  styleUrls: ['./app-test-component.component.scss']
})
export class AppTestComponentComponent implements OnInit {

  @Input() testInput: string;
  @Output() testOutput: string;

  constructor() { }

  ngOnInit() {
  }

}
