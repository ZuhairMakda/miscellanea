import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DealsComponent } from './deals/deals.component';
import { DataService } from './services/data-service.service';
import { ListingsComponent } from './listings/listings.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingViewDialogComponent } from './listing-view-dialog/listing-view-dialog.component';
import { BuyerViewDialogComponent } from './buyer-view-dialog/buyer-view-dialog.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AccountComponent } from './account/account.component';

import { NgxMatFileInputModule } from '@angular-material-components/file-input';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'deals', component: DealsComponent},
  { path: 'post', component: PostComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'login', component: AccountComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DealsComponent,
    ListingsComponent,
    PostComponent,
    PageNotFoundComponent,
    ListingViewDialogComponent,
    BuyerViewDialogComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MaterialModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- for debugging purposes only)
    ),
    NgxMatFileInputModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ ListingViewDialogComponent, BuyerViewDialogComponent ]
})
export class AppModule { }
