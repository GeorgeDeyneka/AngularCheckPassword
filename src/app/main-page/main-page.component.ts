import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public form: FormGroup;
  public count: number;
  private regExpObj = {
    letters: /[a-zA-z]/,
    numbers: /\d/,
    symbols: /[!@#$%^&*]/,
  };

  // Add responsive design
  // Add github pages
  // Work from valid messages

  constructor(private fb: FormBuilder) {}

  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.checkStrength();
  }

  checkStrength() {
    this.count = 0;
    const value = this.password?.value;

    if (value.length < 8) {
      return;
    }

    const regExpVal = Object.values(this.regExpObj);
    regExpVal.forEach((el) => {
      if (el.test(value)) this.count++;
    });
  }
}
