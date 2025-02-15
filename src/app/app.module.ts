import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstnameComponent } from './firstname/firstname.component';
import { AmountComponent } from './amount/amount.component';
import { CategoryComponent } from './category/category.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { PractiseComponent } from './practise/practise.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({ declarations: [
        AppComponent,
        FirstnameComponent,
        AmountComponent,
        CategoryComponent,
        ConvertToSpacesPipe,
        PractiseComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'oefenen', component: PractiseComponent },
            { path: 'statistieken', component: StatisticsComponent },
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { useHash: false })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
