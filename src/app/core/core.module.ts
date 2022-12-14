import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer, sessionFeatureKey } from './state/session.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SessionEffects } from './state/session.effects';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(sessionFeatureKey, reducer),
    EffectsModule.forFeature([SessionEffects])
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }
