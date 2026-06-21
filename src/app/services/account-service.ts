import { Injectable } from '@angular/core';
import { Account } from '../shared/models/account';
import { sampleAccounts } from '../../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCOUNTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http:HttpClient) {

  }

  logIn(email: string, hashedPassword: string) {

  }

  getAll(): Observable<Account[]> {
    // TODO: if database connection fails, return sampleAccounts
    // TODO: implement database connection
    return this.http.get<Account[]>(ACCOUNTS_URL);
  }

  transferFunds(srcAccount: number, dstAccount: number, amount: number) {

  }
}
