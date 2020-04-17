import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from 'src/app/services/home.service';
import {Banner, HotTags, PersonalSheet, Singer} from 'src/app/services/data-type/common.type';
import {NzCarouselComponent} from 'ng-zorro-antd';
import {SingerService} from '../../services/singer.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {SheetService} from '../../services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  Banner: Banner[] = [];
  HotTags: HotTags[] = [];
  PersonalSheets: PersonalSheet[] = [];
  SingerList: Singer[] = [];
  @ViewChild(NzCarouselComponent, {static: true}) NzCarousel: NzCarouselComponent;

  constructor(private homeService: HomeService,
              private singerService: SingerService,
              private route: ActivatedRoute,
              private sheetService: SheetService
  ) {
    // 从 resolve获取数据
    this.route.data.pipe(map(res => res.homeData)).subscribe(([banner, hotTags, PersonalSheets, SingerList]) => {
      this.Banner = banner;
      this.HotTags = hotTags;
      this.PersonalSheets = PersonalSheets;
      this.SingerList = SingerList;
    });
    // this.getBanners();
    // this.getHotTags();
    // this.getPersonalSheetList();
    // this.getEnterSinger();
  }

  ngOnInit() {
  }

  // 获取轮播图
  getBanners() {
    this.homeService.getBanner().subscribe(res => {
      this.Banner = res;
    });
  }

  // 获取热门标签
  getHotTags() {
    this.homeService.getHotTags().subscribe(res => {
      this.HotTags = res;
    });
  }

  // 获取热门歌单
  getPersonalSheetList() {
    this.homeService.getPersonalSheetList().subscribe(res => {
      this.PersonalSheets = res;
    });
  }

  // 获取入驻歌手
  getEnterSinger() {

    this.singerService.getEnterSinger().subscribe(res => {
      this.SingerList = res;
    });
  }

  nzBeforeChange({to}) {
    this.carouselActiveIndex = to;
  }

  ChangeSlide(type: 'pre' | 'next') {
    this.NzCarousel[type]();
  }

  // 歌单详情
  onPalySheet(id: number) {
    this.sheetService.playSheet(id).subscribe(res => {
      console.log(res);
    });
  }
}
