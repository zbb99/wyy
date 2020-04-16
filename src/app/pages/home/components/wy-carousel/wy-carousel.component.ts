import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {

  // true 变更检测前  false变更检测后
  @ViewChild('dot', {static: true}) dotRef: TemplateRef<any>;

  @Input() activeIndex;

  @Output() ChangeSlide: EventEmitter<'pre' | 'next'> = new EventEmitter<'pre' | 'next'>();

  constructor() {
  }

  ngOnInit() {
  }


  onChangeSlide(type: 'pre' | 'next') {
    this.ChangeSlide.emit(type);
  }
}
