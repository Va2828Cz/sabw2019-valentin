import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {
  
  constructor() { }

  ende: number = 10;
  liste: Array<number> = [];
  

  ngOnInit() {
  }

  zaehle(){
    this.liste = [1];
    for(let i = 0; i <= this.ende ; i++ ){
      this.liste.push(i);

    }
  }

}