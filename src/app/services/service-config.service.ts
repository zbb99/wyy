import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AppConsts} from '../share/AppConsts';

@Injectable({
  providedIn: 'root'
})
export class ServiceConfigService {


  constructor(
    private http: HttpClient
  ) {
  }

  loadConfig(): Promise<void> {
    return this.http.get('/assets/' + environment.appConfig).toPromise().then((res: any) => {
      AppConsts.ApiUrl = res.apiUrl;
    });
  }


}
