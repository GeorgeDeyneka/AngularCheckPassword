import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { INFO_TEXT, REG_EXP_OBJ, TITLES_TEXT } from '../data/state';
import { RegExpObj } from '../models/reg-exp-obj.interface';
import { TemplateText } from '../models/template-text.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public form: FormGroup;
  public count: number;
  private regExpObj: RegExpObj = REG_EXP_OBJ;
  public titlesText: TemplateText = TITLES_TEXT;
  public infoText: TemplateText = INFO_TEXT;

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
