import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PersonalSheet} from '../../../services/data-type/common.type';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  @Input() sheet: PersonalSheet;
  @Output() onPlay = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  playSheet(id: number) {
    this.onPlay.emit(id);
  }
}
