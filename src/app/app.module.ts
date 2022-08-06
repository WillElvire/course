import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreationComponent } from './creation/creation.component';
import {TuiToggleModule} from '@taiga-ui/kit';
import { ModificationComponent } from './adds/modification/modification.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreationComponent,
    ModificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiButtonModule,
      TuiToggleModule

],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
