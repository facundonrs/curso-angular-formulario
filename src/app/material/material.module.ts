import { NgModule } from "@angular/core";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
    ]
})
export class MaterialModule {}
