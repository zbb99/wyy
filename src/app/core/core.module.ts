import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { registerLocaleData } from '@angular/common';
import {  NZ_I18N, zh_CN } from 'ng-zorro-antd';

import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports:[
    ShareModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],

})
export class CoreModule { 
  // 当CoreModule 被注入是时会调用这个构造函数
  // 判断他是否被其他模块引入了，如果是就抛出异常
  // CoreModule 只能被appModule引入

  // @SkipSelf 注入时，寻找注入对象时跳过自己
  // 不然回一直循环调用自己这个构造函数

  // 当Angular找不到依赖时，@Optional装饰器会告诉Angular继续执行，Angualr会把此注入参数设置为null（而不是默认的抛出错误的行为）
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
      if(parentModule){
        throw new Error("coreModule 只能被appMoudle引入")
      }
  }
}
