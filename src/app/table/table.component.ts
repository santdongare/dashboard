import { Component, OnInit } from '@angular/core';
import { TDashService } from '../tdash.service';
import { Router,  ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {ngxCsv} from 'ngx-csv/ngx-csv'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  search!: string;
  obj:any;
  Name:any;
  page: number = 1;
  dropdownList:any = [];
  dropdownSettings!: {};
  tmp:any={};
  display=true;
  constructor(private router:Router,private ActivateedRoute:ActivatedRoute,private TDash:TDashService) 
  { 
       this.TDash.getUserData().subscribe(data=>{
       console.log(data);
       this.obj=data;
    })

    
  
    // this.TDash.getData().subscribe((data:any)=>{
    //   console.log(data);
    //  this.tmp=data;
    // })
  }
  toggle(){
      this.display=!this.display;
  }
  filedownload(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Report Data',
      useBom: true,
      noDownload: false,
      headers: ["projectType", "projectID", "IprojectTitle","commodityType","projectOwner","Business"]
     
    };
   
    new ngxCsv(this.obj, "Report", options);
  }

    
  ngOnInit(): void {

    
    
     //this.dropdownList = this.tmp;
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Kolhapur' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Nagpur' },
    //   { item_id: 5, item_text: 'Nashik' }
    // ];
    
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 5,
    //   allowSearchFilter: true
    //};
    
   
  }
  

}

