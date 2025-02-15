import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'vk-page-not-found',
    template: `
    <p>
      page-not-found works!
    </p>
  `,
    styles: [],
    standalone: false
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
