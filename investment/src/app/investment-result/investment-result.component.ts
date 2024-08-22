import { CurrencyPipe } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl:  './investment-results.component.css',
})

export class InvestmentResultsComponent {
  @Input() results?: {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number ;
    }[];
}


