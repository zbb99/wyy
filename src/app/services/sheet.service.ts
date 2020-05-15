import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APi_CONFIG} from '../app.module';
import {ServicesModule} from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(private http: HttpClient, @Inject(APi_CONFIG) private url: string) {

  }
}
