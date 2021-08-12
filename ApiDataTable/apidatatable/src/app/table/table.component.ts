import { Component, OnInit } from '@angular/core';
import { DummydataService } from '../dummydata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
//injecting the dummy data services inside 
  constructor(private dummy:DummydataService) { }
  employee:any=[];
  ngOnInit(): void {
    this.dummy.getData().subscribe(data=>{console.log(data.data);
    this.employee=data.data;       
    });

  }

}
