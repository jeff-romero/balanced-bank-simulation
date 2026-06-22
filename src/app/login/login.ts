import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm!:FormGroup;
  attemptedLogin = false;
  @Input() loggedIn:boolean = false;

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    if (this.loggedIn) {
      
    }
  }

  get formControl() {
    return this.loginForm.controls;
  }

  logIn(): void {
    this.attemptedLogin = true;

    if (this.loginForm.invalid) {
      return;
    }

    let toHash:any = this.formControl['password'];
    let hash:any = CryptoJS.SHA256(toHash).toString();
    this.formControl['password'] = hash;

    console.log(`email: ${this.formControl['email'].value}`);
    console.log(this.formControl['password']);
  }
}
