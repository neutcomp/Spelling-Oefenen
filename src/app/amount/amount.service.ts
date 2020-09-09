import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AmountService {

    constructor(private http: HttpClient) { }

    getAmount(): string {
        return sessionStorage.getItem('amount');
    }

    setAmount(amount: string): void {
        sessionStorage.setItem('amount', amount);
    }
}
