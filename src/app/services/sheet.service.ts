import {Inject, Injectable} from '@angular/core';
import {ServicesModule} from './services.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APi_CONFIG} from '../app.module';
import {Observable} from 'rxjs';
import {PersonalSheet, Song} from './data-type/common.type';
import {map, pluck, switchMap} from 'rxjs/operators';
import {SongService} from './song.service';

@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(
    private http: HttpClient,
    @Inject(APi_CONFIG) private url: string,
    private song: SongService
  ) {
  }

  // 获取歌单详情
  getSongSheetDetel(id: number): Observable<PersonalSheet> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.url + '/playlist/detail', {params})
      .pipe(map((res: { playlist: PersonalSheet }) => {
        return res.playlist;
      }));
  }

  //
  playSheet(id: number): Observable<Song[]> {
  return  this.getSongSheetDetel(id)
    // 取某个属性
      .pipe(pluck('tracks'), switchMap((tracks: Song | Song[]) => this.song.getSongList(tracks)));
  }
}
