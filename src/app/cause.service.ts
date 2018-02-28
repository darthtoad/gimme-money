import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Cause } from './cause.model';

@Injectable()
export class CauseService {
  causes: FirebaseListObservable<any>;

  constructor(private database: AngularFireDatabase) {
    this.causes = database.list('causes');
  }

  getCauses() {
    return this.causes;
  }

  addCause(newCause: Cause) {
    this.causes.push(newCause);
  }

  getCauseById(causeId: string) {
    return this.database.object('causes/' + causeId);
  }
  
  updateCause(causeToUpdate) {
    let causeInFirebase = this.getCauseById(causeToUpdate.$key);
    causeInFirebase.update({
      name: causeToUpdate.name,
      goal: causeToUpdate.goal,
      currentFunds: causeToUpdate.currentFunds,
      description: causeToUpdate.description
    })
  }

  deleteCause(causeToDelete) {
    let causeInFirebase = this.getCauseById(causeToDelete.$key);
    causeInFirebase.remove();
  }

}
