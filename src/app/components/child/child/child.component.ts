import {
  Component, OnInit, Input, Output, EventEmitter, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, DoCheck, OnChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  DoCheck,
  OnChanges {

  @Input() parentData!: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData!: number;
  childComponent: any;

  constructor() { console.log('constructor Work!') }

  ngOnInit(): void {
    this.childData = 0;
    console.log('ngOnInit Work!')
  }
  ngDoCheck() {
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Work');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Work!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit Work!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Work');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Work!');
  }
  ngOnChanges() {
    console.log('ngOnChanges Work!')
  }

  onClick2Parent() {
    this.childData += 1;
    this.messageEvent.emit(this.childData)
  }
  onClickViewChild() {
    this.childComponent.onClick2Parent();
  }
}
