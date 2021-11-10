import { Component, OnInit } from '@angular/core';
import { TDashService } from '../tdash.service';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  search!: string;
  obj:any
  Name:any;
  page: number = 1;
  constructor(private router:Router,private ActivateedRoute:ActivatedRoute,public TDash:TDashService) { }

  ngOnInit(): void {

    this.obj = this.TDash.DashData;
    
   
  }

}
