import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDADORES } from './directives/validadores.directive';

@NgModule({
  declarations: [ PIPES_CADENAS, SizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES, ],
  exports: [ PIPES_CADENAS, SizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES, ],
  imports: [
    CommonModule
  ]
})
export class IndraCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: IndraCoreModule) {
    if (parentModule) {
      const msg = `IndraCoreModule) has already been loaded.
        Import IndraCoreModule) once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
 }
