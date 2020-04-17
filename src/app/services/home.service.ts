import {Inject, Injectable} from '@angular/core';
import {ServicesModule} from './services.module';
import {APi_CONFIG} from '../app.module';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Banner, HotTags, PersonalSheet} from './data-type/common.type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  //  把服务注册放这里 当该服务没有使用是会被摇树优化
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(APi_CONFIG) private url: string) {
  }

  // 获取轮播图
  getBanner(): Observable<Banner[]> {
    return this.http.get(this.url + '/banner')
      .pipe(map((res: { banners: Banner[] }) => res.banners));
  }

  // 获取热门标签
  getHotTags(): Observable<HotTags[]> {
    return this.http.get(this.url + '/playlist/hot')
      .pipe(map((res: { tags: HotTags[] }) => {
        return res.tags.sort((x: HotTags, y: HotTags) => {
          return x.position - y.position;
        }).slice(0, 5);
      }));
  }

// 获取热门歌单
  getPersonalSheetList(): Observable<PersonalSheet[]> {
    return this.http.get(this.url + '/personalized')
      .pipe(map((res: { result: PersonalSheet[] }) => res.result.slice(0, 16)));
  }

}
