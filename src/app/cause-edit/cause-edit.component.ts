import { Component, Input, OnInit } from '@angular/core';
import { CauseService } from '../cause.service';

@Component({
  selector: 'app-cause-edit',
  templateUrl: './cause-edit.component.html',
  styleUrls: ['./cause-edit.component.css'],
  providers: [CauseService]
})
export class CauseEditComponent implements OnInit {
  @Input() selectedCause;
  constructor(private causeService: CauseService) { }

  beginUpdatingCause(causeToUpdate){
    this.causeService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
    if (confirm(`Are you sure you want to delete the cause ${causeToDelete.name}?`))
    this.causeService.deleteCause(causeToDelete);
  }

  ngOnInit() {
  }

}
