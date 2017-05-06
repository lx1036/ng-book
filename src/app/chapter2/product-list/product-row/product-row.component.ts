import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {Product} from '../../Product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('class') 'class' = 'item';

  constructor() { }

  ngOnInit() {
  }
}
