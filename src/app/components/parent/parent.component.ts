import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  parentData!: number;
  constructor(){}

  ngOnInit(): void {
    this.parentData=0;
  }

  onClick2Child(){
    this.parentData +=1;
  }

}
