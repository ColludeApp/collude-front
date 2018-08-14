import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule } from "@angular/material";
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
