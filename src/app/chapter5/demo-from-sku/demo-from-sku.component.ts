import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-from-sku',
  templateUrl: './demo-from-sku.component.html',
  styleUrls: ['./demo-from-sku.component.css']
})
export class DemoFromSkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('you submitted value:', value);
  }
}
