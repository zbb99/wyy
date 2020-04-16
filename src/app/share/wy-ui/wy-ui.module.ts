import {NgModule} from '@angular/core';
import {SingleSheetComponent} from './single-sheet/single-sheet.component';
import {PlayCountPipe} from '../play-count.pipe';
import {WyPlayerModule} from './wy-player/wy-player.module';


@NgModule({
  declarations: [SingleSheetComponent, PlayCountPipe],
  exports: [
    SingleSheetComponent,
    PlayCountPipe,
    WyPlayerModule
  ],
  imports: [WyPlayerModule],
})
export class WyUiModule {
}
