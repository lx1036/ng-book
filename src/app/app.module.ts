import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ChatNavBarComponent } from './chapter10/chat-nav-bar/chat-nav-bar.component';
import { ChatThreadComponent } from './chapter10/chat-threads/chat-thread/chat-thread.component';
import { ChatThreadsComponent } from './chapter10/chat-threads/chat-threads.component';
import { ChatMessageComponent } from './chapter10/chat-window/chat-message/chat-message.component';
import { ChatWindowComponent } from './chapter10/chat-window/chat-window.component';
import { ChatComponent } from './chapter10/chat/chat.component';
import { FromNowPipe } from './chapter10/from-now.pipe';
import { InventoryAppComponent } from './chapter2/inventory-app/inventory-app.component';
import { ProductListComponent } from './chapter2/product-list/product-list.component';
import { PriceDisplayComponent } from './chapter2/product-list/product-row/price-display/price-display.component';
import { ProductDepartmentComponent } from './chapter2/product-list/product-row/product-department/product-department.component';
import { ProductImageComponent } from './chapter2/product-list/product-row/product-image/product-image.component';
import { ProductRowComponent } from './chapter2/product-list/product-row/product-row.component';
import { DemoFormNgModelComponent } from './chapter5/demo-form-ng-model/demo-form-ng-model.component';
import { DemoFormSkuBuilderComponent } from './chapter5/demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFromSkuComponent } from './chapter5/demo-from-sku/demo-from-sku.component';
import { SimpleHttpComponent } from './chapter6/simple-http/simple-http.component';
import { SearchBoxComponent } from './chapter6/youtube-search/search-box/search-box.component';
import { SearchResultComponent } from './chapter6/youtube-search/search-result/search-result.component';
import {youtubeServiceInjectables, YoutubeSearchComponent} from './chapter6/youtube-search/youtube-search.component';
import { CustomFormTagComponent } from './forms/custom-form-tag/custom-form-tag.component';
import { CustomFormComponent } from './forms/custom-form-tag/custom-form/custom-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven/template-driven-form.component';
import { ModelDrivenFormComponent } from './forms/model-driven/model-driven-form.component';

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
    // DemoFormSkuBuilderComponent,
    // DemoFormNgModelComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatThreadComponent,
    ChatMessageComponent,
    FromNowPipe,
    ChatComponent,
    CustomFormTagComponent,
    CustomFormComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    youtubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
