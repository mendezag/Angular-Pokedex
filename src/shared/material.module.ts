import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports:[
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatChipsModule,
        MatInputModule
    ],
    exports:[
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatChipsModule,
        MatInputModule
    ]
})
export class MaterialModule{}
