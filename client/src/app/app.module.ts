import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './components/forms/forms.component';
import { CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './components/completed/completed.component';
import { DetailsComponent } from './components/details/details.component';
import { SelectionComponent } from './components/selection/selection.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FormsComponent,
    CanvasComponent,
    ModalComponent,
    HomeComponent,
    CompletedComponent,
    DetailsComponent,
    SelectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    CanvasWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent]
})
export class AppModule { }
