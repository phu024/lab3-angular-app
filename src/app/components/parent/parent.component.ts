export class ParentComponent implements OnInit{
  parentData!: number;
  constructor(){}

  ngOnInit(): void {
    this.parentData=0
  }

  onClick2Child(){
    this.parentData +=1;
  }
}