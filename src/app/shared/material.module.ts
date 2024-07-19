import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// import {
//   DateAdapter,
//   MAT_DATE_FORMATS,
//   MAT_DATE_LOCALE,
// } from '@angular/material/core';
// import {
//   MaterialPersianDateAdapter,
//   PERSIAN_DATE_FORMATS,
// } from './material-persian-date-adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatListModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatListModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  // providers: [
  //   {
  //     provide: DateAdapter,
  //     useClass: MaterialPersianDateAdapter,
  //     deps: [MAT_DATE_LOCALE],
  //   },
  //   { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
  // ],
})
export class MaterialModule {}
