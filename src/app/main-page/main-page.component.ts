import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public formSubj$: Subscription;

  constructor(private fb: FormBuilder) {}

  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.formSubj$ = this.form.valueChanges.subscribe((value) =>
      console.log(value.password)
    );
  }

  ngOnDestroy(): void {
    this.formSubj$.unsubscribe();
  }
}
