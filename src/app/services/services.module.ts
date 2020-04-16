import {InjectionToken, NgModule} from '@angular/core';

export const APi_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: APi_CONFIG, useValue: 'http://localhost:3000'
    }
  ]
})
export class ServicesModule {
}
