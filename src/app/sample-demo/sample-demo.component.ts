import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-demo',
  templateUrl: './sample-demo.component.html',
  styleUrls: ['./sample-demo.component.css']
})
export class SampleDemoComponent implements OnInit {

  names = ['deepak','pratik'];
  constructor() { }

  ngOnInit() {
  }

}
