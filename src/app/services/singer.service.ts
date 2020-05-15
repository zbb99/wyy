import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APi_CONFIG} from '../app.module';
import {Observable} from 'rxjs';
import {Singer} from './data-type/common.type';
import {map} from 'rxjs/operators';
import * as querystring from 'querystring';
import {ServicesModule} from './services.module';

interface SingerParams {
  offset: number;
  limit: number;
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
};

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {


  constructor(private http: HttpClient, @Inject(APi_CONFIG) private url: string) {
  }

  //  获取入驻歌手
  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({fromString: querystring.stringify(args)});
    return this.http.get(this.url + '/artist/list', {params})
      .pipe(map((res: { artists: Singer[] }) => res.artists));
  }
}
