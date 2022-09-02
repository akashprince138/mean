import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from './ngrx.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    NgrxRoutingModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [NgrxComponent],
})
export class NgrxModule {}
