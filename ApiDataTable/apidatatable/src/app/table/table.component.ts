import { Component, OnInit } from '@angular/core';
import { DummydataService } from '../dummydata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employee:any;
  constructor(private dummy:DummydataService) { }

  ngOnInit(): void {
      this.dummy.getData().subscribe(data=>{  console.warn(data);
      this.employee=data;
    });
  }

}
