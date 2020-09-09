import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstnameComponent } from './firstname/firstname.component';
import { AmountComponent } from './amount/amount.component';
import { CategoryComponent } from './category/category.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FirstnameComponent,
    AmountComponent,
    CategoryComponent,
    ConvertToSpacesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
