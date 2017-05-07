import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-builder',
  templateUrl: './demo-form-sku-builder.component.html',
  styleUrls: ['./demo-form-sku-builder.component.css']
})
export class DemoFormSkuBuilderComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    // this.myForm = fb.group({
    //   'sku': ['ABC123', Validators.required]
    // });

    // this.myForm = fb.group({
    //   'sku':  ['lxlxl', Validators.required]
    // });


    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
