import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { loginI } from '../../interface/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(1)]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);

    this._authService
      .login(this.loginForm.value as loginI)
      .pipe(
        tap((res) => {
          console.log(res);
          localStorage.setItem('user', JSON.stringify(res.user));
          if (res.user.user_type === 'estudiante') {
            this._router.navigate(['dashboardE']);
          } else {
            this._router.navigate(['dashboardP']);
          }
        }),
        catchError((err) => {
          console.log('Hoo no parece que ha fallado');
          throw err;
        })
      )
      .subscribe();
  }
}
