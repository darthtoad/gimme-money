import { Component, OnInit } from '@angular/core';
import { CauseService } from '../cause.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-cause-new',
  templateUrl: './cause-new.component.html',
  styleUrls: ['./cause-new.component.css'],
  providers: [CauseService]
})
export class CauseNewComponent implements OnInit {

  constructor(private causeService: CauseService) { }

  ngOnInit() {
  }

  submitForm(name: string, goal: number, currentFunds: number, description: string) {
    const newCause: Cause = new Cause(name, goal, currentFunds, description);
    this.causeService.addCause(newCause);
  }

}
