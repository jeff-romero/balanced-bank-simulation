import { Component } from '@angular/core';
import { AccountService } from '../services/account-service';
import { Account } from '../shared/models/account';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
    this.accounts = accountService.getAll();
  }
}
