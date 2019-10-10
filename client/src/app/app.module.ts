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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FormsComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    CanvasWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
