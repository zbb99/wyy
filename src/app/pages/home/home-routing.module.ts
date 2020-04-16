import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeResolveService} from './home-resolve.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: '发现'},
    resolve: {homeData: HomeResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolveService]
})
export class HomeRoutingModule {
}
