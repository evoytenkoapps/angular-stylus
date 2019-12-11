import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {WebsiteNavbarComponent} from './components/website-navbar/website-navbar.component';
import {
  DateAdapter,
  ErrorStateMatcher,
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatStepperIntl,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatRadioModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { RouteSupportComponent } from './components/routes/route-support/route-support.component';

export const desktopRoutes: Routes = [
  {
    path: "support",
    component: RouteSupportComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WebsiteNavbarComponent,
    RouteSupportComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    RouterModule.forRoot(desktopRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
