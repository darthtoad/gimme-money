import { Component, OnInit } from '@angular/core';
import { CauseService } from '../cause.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cause } from '../cause.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './cause-detail.component.html',
  styleUrls: ['./cause-detail.component.css'],
  providers: [CauseService]
})
export class CauseDetailComponent implements OnInit {
  causeId: string;
  causeToDisplay;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private causeService: CauseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.causeId = urlParameters['id'];
    })
    this.causeService.getCauseById(this.causeId).subscribe(dataLastEmittedFromObserver => {
         this.causeToDisplay = dataLastEmittedFromObserver;

         console.log(this.causeToDisplay);
       })
  }

  edit(causeToDisplay) {
    this.router.navigate(['causes/' + this.causeId + '/edit'])
  }

  addFunds(value) {
    this.causeToDisplay.currentFunds += parseFloat(value);
    this.causeService.updateCause(this.causeToDisplay);
  }

}
