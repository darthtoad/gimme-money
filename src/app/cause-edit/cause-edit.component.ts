import { Component, Input, OnInit } from '@angular/core';
import { CauseService } from '../cause.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model'

@Component({
  selector: 'app-cause-edit',
  templateUrl: './cause-edit.component.html',
  styleUrls: ['./cause-edit.component.css'],
  providers: [CauseService]
})
export class CauseEditComponent implements OnInit {
  causeId: string;
  causeToEdit;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private causeService: CauseService) { }

  beginUpdatingCause(causeToUpdate){
    this.causeService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
    if (confirm(`Are you sure you want to delete the cause ${causeToDelete.name}?`))
    this.causeService.deleteCause(causeToDelete);
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.causeId = urlParameters['id'];
    })
    this.causeService.getCauseById(this.causeId).subscribe(dataLastEmittedFromObserver => {
       this.causeToEdit = dataLastEmittedFromObserver;
    })
  }

}
