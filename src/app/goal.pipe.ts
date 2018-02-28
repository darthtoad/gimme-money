import { Pipe, PipeTransform } from '@angular/core';
import { Cause } from './cause.model';

@Pipe({
  name: 'goal',
  pure: false
})
export class GoalPipe implements PipeTransform {

  transform(input: Cause[], desiredCause) {
    let output: Cause[] = [];
    if (desiredCause === "ascending") {
      output = input.sort((a, b) => a.goal - b.goal).reverse();
      // let newInput = input;
      // let currentMax;
      // for (let i = 0; i < input.length; i++) {
      //   if (i === 0) {
      //     currentMax = input[0];
      //   } else {
      //     for (let j = 0; j < newInput.length; j++) {
      //       if (newInput[j].goal >= currentMax.goal) {
      //         currentMax = newInput[j];
      //       }
      //     }
      //   }
      //   output.push(currentMax);
      //   const index = newInput.indexOf(currentMax);
      // }
      return output;
    } else if (desiredCause === "descending") {
      output = input.sort((a, b) => a.goal - b.goal);
      // let newInput = input;
      // let currentMax;
      // for (let i = 0; i < input.length; i++) {
      //   if (i === 0) {
      //     currentMax = input[0];
      //   } else {
      //     for (let j = 0; j < newInput.length; j++) {
      //       if (newInput[j].goal <= currentMax.goal) {
      //         currentMax = newInput[j];
      //       }
      //     }
      //   }
      //   output.push(currentMax);
      //   const index = newInput.indexOf(currentMax);
      // }
      return output;
    } else {
      return input;
    }
  }
}
