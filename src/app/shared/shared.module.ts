import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import {ControlRequiredPipe} from '@shared/pipes/control-required.pipe';
import {ParseTimePipe} from '@shared/pipes/parse-time.pipe';

@NgModule({
  declarations: [
    ResponsiveHelperComponent,
    ClickOutsideDirective,
    ControlRequiredPipe,
    ParseTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveHelperComponent,
    ClickOutsideDirective,
    ControlRequiredPipe,
    ParseTimePipe
  ],
})
export class SharedModule {}
