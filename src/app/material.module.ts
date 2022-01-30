import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    AgmCoreModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports:[
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
