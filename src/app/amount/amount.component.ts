import { Component, OnInit } from '@angular/core';
import { AmountService } from './amount.service';

@Component({
    selector: 'vk-amount',
    templateUrl: './amount.component.html',
    styleUrls: ['./amount.component.scss'],
    standalone: false
})

export class AmountComponent implements OnInit {
  amount: string;

  constructor(private amountService: AmountService) { }

  ngOnInit(): void {
    this.getAmount();
  }

  getAmount(): void {
    this.amount = this.amountService.getAmount();
  }

}
