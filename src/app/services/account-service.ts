import { Injectable } from '@angular/core';
import { Account } from '../shared/models/account';
import { sampleAccounts } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {

  }

  getAll(): Account[] {
    // TODO: if database connection fails, return sampleAccounts
    // TODO: implement database connection
    return sampleAccounts;
  }
}
