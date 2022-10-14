import { NgModule } from "@angular/core";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatTableModule,
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule,
    ]
})
export class MaterialModule {}
