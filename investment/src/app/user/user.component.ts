import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { investmentInput } from '../investment.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl:  './user-input.component.css',
})

export class UserComponent {
  @Output() calculate = new EventEmitter <investmentInput> ();
   enteredInitialInvestment = '0';
   enteredAnnualInvestment = '0';
   enteredExpectedReturn = '5';
   enteredDuration = '10';
  
  onSubmit(){
      this.calculate.emit({
        initialInvestment : +this.enteredInitialInvestment,
        duration : +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: +this.enteredAnnualInvestment
        
      })
       
    }
}