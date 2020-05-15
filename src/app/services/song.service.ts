import {Inject, Injectable} from '@angular/core';
import {ServicesModule} from './services.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APi_CONFIG} from '../app.module';
import {Observable} from 'rxjs';
import {Song, SongUrl} from './data-type/common.type';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: ServicesModule
})
export class SongService {

  constructor(private http: HttpClient, @Inject(APi_CONFIG) private url: string) {
  }

  // 获取歌曲播放地址
  getSongUrl(ids: string): Observable<SongUrl[]> {
    const params = new HttpParams().set('id', ids);
    return this.http.get(this.url + '/song/url', {params})
      .pipe(map((res: { data: SongUrl[] }) => {
        return res.data;
      }));
  }

  getSongList(song: Song | Song[]): Observable<Song[]> {
    const songArr = Array.isArray(song) ? song.slice() : [song];
    const ids = songArr.map(res => res.id).join(',');
    return this.getSongUrl(ids).pipe(map(res => this.generateSongList(songArr, res)));
  }

  private generateSongList(songs: Song[], urls: SongUrl[]): Song[] {
    const result = [];
    songs.forEach((x, index) => {
      const url = urls.find(y => y.id === x.id);
      if (url) {
        result.push({...x, url});
      }
    });
    return result;
  }
}
