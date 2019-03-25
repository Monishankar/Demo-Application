import { Component, OnInit } from '@angular/core';
import { ProcessInstance, ProcessService } from '@alfresco/adf-process-services';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit {
  processInstanceDetails: ProcessInstance;


  processId: string;
  logService: any;
  appId:string;
  
  constructor(private activitiProcess: ProcessService,
     private route: ActivatedRoute,
     private router:Router,private location: Location) { }
  
  
  ngOnInit() {
  this.route.params.subscribe(params => {
  const processId = params['processInstanceId'];
  if (processId && processId !== '0') {
  this.processId = params['processInstanceId'];
  this.loadProcessDetails(this.processId);
  }
  })
  }

  loadProcessDetails(processId: string) {
  if (processId) {
  this.activitiProcess.getProcess(processId).subscribe(
  (res: ProcessInstance) => {
  this.processInstanceDetails = res;
  }
  );
  }
  }
  
  onTaskClick(data:any) 
  {
    
    {
    //this.appId=this.processId;
    this.router.navigate(['/apps',this.processId||0,'tasks',data.value.id]);
    }
    }
  
    goBack() {
      this.location.back();
    }

}
