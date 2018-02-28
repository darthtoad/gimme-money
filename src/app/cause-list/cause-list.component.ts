import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { CauseService } from '../cause.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cause-list',
  templateUrl: './cause-list.component.html',
  styleUrls: ['./cause-list.component.css'],
  providers: [CauseService]
})
export class CauseListComponent implements OnInit {
  causes: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;
  filterByGoal: string = "all";

  constructor(private router: Router, private causeService: CauseService) { }

  ngOnInit() {
    this.causes = this.causeService.getCauses();
  }

  seeDetails(cause) {
    this.router.navigate(['causes', cause.$key])
  }

  onChange(optionFromMenu) {
    this.filterByGoal = optionFromMenu;
  }

}
