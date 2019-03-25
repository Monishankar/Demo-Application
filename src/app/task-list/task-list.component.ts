import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  appId: string = null;

  constructor(private router: Router,
              private route: ActivatedRoute,private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const applicationId = params['appId'];
      if (applicationId && applicationId !== '0') {
          this.appId = params['appId'];
      }
    });
  }

  onRowClick(taskId: string) {
    if (taskId) {
      this.router.navigate(['/apps', this.appId || 0, 'tasks', taskId]);
    }
  }
  goBack() {
    this.location.back();
  }


}
