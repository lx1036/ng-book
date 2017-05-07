import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { InventoryAppComponent } from './chapter2/inventory-app/inventory-app.component';
import { ProductListComponent } from './chapter2/product-list/product-list.component';
import { ProductRowComponent } from './chapter2/product-list/product-row/product-row.component';
import { PriceDisplayComponent } from './chapter2/product-list/product-row/price-display/price-display.component';
import { ProductDepartmentComponent } from './chapter2/product-list/product-row/product-department/product-department.component';
import { ProductImageComponent } from './chapter2/product-list/product-row/product-image/product-image.component';
import { DemoFromSkuComponent } from './chapter5/demo-from-sku/demo-from-sku.component';
import { DemoFormSkuBuilderComponent } from './chapter5/demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormNgModelComponent } from './chapter5/demo-form-ng-model/demo-form-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    InventoryAppComponent,
    ProductListComponent,
    ProductRowComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    DemoFromSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
