import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit {

  @Input() toDoId;
  @Output() toDoComment = new EventEmitter<{}>();

  comment : any = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.toDoId);
  }

  emitComment(){
    this.toDoComment.emit({id:this.toDoId,comment:this.comment});
  }

}
