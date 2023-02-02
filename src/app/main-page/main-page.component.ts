import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { INFO_TEXT, REG_EXP_ARR, TITLES_TEXT } from '../data/state';
import { TemplateText } from '../models/template-text.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public titlesText: TemplateText = TITLES_TEXT;
  public infoText: TemplateText = INFO_TEXT;
  private regExpArr: RegExp[] = REG_EXP_ARR;
  public form: FormGroup;
  public formSubj$: Subscription;

  public count: number;
  public inputLength: number;
  public conditionInvalid: boolean;

  constructor(private fb: FormBuilder) {}

  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z\d!@#$%^&*]+$/),
      ]),
    });

    this.formSubj$ = this.form.valueChanges
      .pipe(debounceTime(250))
      .subscribe(() => {
        this.checkStrength();
        this.inputLength = this.password?.value.length;
        this.conditionInvalid = !this.count && !!this.inputLength;
      });
  }

  checkStrength() {
    this.count = 0;

    if (this.form.invalid) return;

    this.regExpArr.forEach((el) => {
      if (el.test(this.password?.value)) this.count++;
    });
  }

  ngOnDestroy(): void {
    this.formSubj$.unsubscribe();
  }
}
