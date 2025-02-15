import { Component, OnInit } from '@angular/core';

import { FirstnameService } from './firstname.service';

@Component({
    selector: 'vk-firstname',
    templateUrl: './firstname.component.html',
    styleUrls: ['./firstname.component.scss'],
    standalone: false
})

export class FirstnameComponent implements OnInit {
  firstname: string;

  constructor(private firstnameService: FirstnameService) { }

  ngOnInit(): void {
    this.firstname = this.getFirstname();
  }

  getFirstname(): string {
    return this.firstnameService.getFirstname();
  }

  setFirstname(value: string): void {
    this.firstname = value;
    this.firstnameService.setFirstname(value);
  }
}
