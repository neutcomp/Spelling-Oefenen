import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FirstnameService {
    constructor() { }

    getFirstname(): string {
        return (sessionStorage.getItem('firstname')) ? sessionStorage.getItem('firstname') : '';
    }

    setFirstname(firstname: string): void {
        sessionStorage.setItem('firstname', firstname);
    }
}
