import { IResponse } from './../model/IResponse';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoservice',
  templateUrl: './demoservice.component.html',
  styleUrls: ['./demoservice.component.css']
})
export class DemoserviceComponent implements OnInit {

  serviceData : IResponse;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
    this.getTemperatureData().subscribe((response : IResponse)=>{
      this.serviceData = {...response};
      console.log(this.serviceData);
    })
  }

  getTemperatureData()
  {
    return this.http.get<IResponse>('./assets/data.json');
  }
}
