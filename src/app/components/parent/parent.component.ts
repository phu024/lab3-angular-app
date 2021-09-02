import {
  Component, OnInit, ViewChild,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy,Input
} from '@angular/core';
import { ChildComponent } from '../child/child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {


  constructor() { console.log('constructor Work!'); }

  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;
  parentData!: number;
  childData!: number;
  status!: string;
  textMessage!: any;
  showChild!: boolean;

  ngOnInit(): void {
    this.parentData = 0;
    this.childData = 0;
    console.log('ngOnChanges Work!')
  }
  ngDoCheck(): void {
    console.log(this.textMessage)
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Work');
  }
  ngAfterContentChecked(): void {
    if (this.textMessage == "B6220662") {
      this.status = "Your ID is OK";
    } else {
      this.status = "Error";
    }
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

  onClickViewChild() {
    this.childComponent.onClick2Parent();
  }
  onClick2Child() {
    this.parentData += 1;
  }
  receiveData($event: number) {
    this.childData = $event;
  }
  update() {
    this.showChild = !this.showChild;
  }

}


