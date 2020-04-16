import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {HomeService} from '../../services/home.service';
import {SingerService} from '../../services/singer.service';
import {Banner, HotTags, PersonalSheet, Singer} from '../../services/data-type/common.type';
import {first} from 'rxjs/operators';

type homeDataType = [Banner[], HotTags[], PersonalSheet[], Singer[]];

@Injectable()
export class HomeResolveService implements Resolve<homeDataType> {

  constructor(
    private homeService: HomeService,
    private singerService: SingerService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<homeDataType> | Promise<homeDataType> | any {
    return forkJoin([
      this.homeService.getBanner(),
      this.homeService.getHotTags(),
      this.homeService.getPersonalSheetList(),
      this.singerService.getEnterSinger(),
    ]).pipe(first());
    // take 取第几个  first 取第一个
  }
}
