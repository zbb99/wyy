import {APP_INITIALIZER, InjectionToken, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {ServiceConfigService} from './services/service-config.service';
import {AppConsts} from './share/AppConsts';

export const APi_CONFIG = new InjectionToken('ApiConfigToken');

const appfigInit = (fig: ServiceConfigService) => {
  return () => {
    return fig.loadConfig();
  };
};

export function getApiUrl(): string {
  return AppConsts.ApiUrl;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appfigInit,
      multi: true,
      deps: [ServiceConfigService]
    },
    {
      provide: APi_CONFIG,
      useFactory: getApiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private serviceConfig: ServiceConfigService) {
  }
}
