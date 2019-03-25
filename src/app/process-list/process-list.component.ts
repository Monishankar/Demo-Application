import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {

  appId: string;
 
  constructor(private router:Router,
    private route:ActivatedRoute,private location:Location){}

  ngOnInit() {
    this.route.params.subscribe(params => {
    const applicationId = params['appId'];
    if (applicationId && applicationId !== '0') {
    this.appId = params['appId'];
    }
    });
    }

  onRowClick(processId: any) {
    console.log(processId);
   this.router.navigate(['/process',processId||0,'processDetails']);
  }
  goBack() {
    this.location.back();
  }

}
