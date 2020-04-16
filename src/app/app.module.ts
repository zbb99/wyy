import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
