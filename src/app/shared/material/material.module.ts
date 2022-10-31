import { NgModule } from "@angular/core";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from "@angular/material/select";
//import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
        //MatMomentDateModule,
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatSelectModule
    ]
})
export class MaterialModule {}
