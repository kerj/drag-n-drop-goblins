import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-goblin',
  templateUrl: './goblin.component.html',
  styleUrls: ['./goblin.component.css']
})
export class GoblinComponent implements OnInit {    
  board = new Board
  goblinId: number = 0;
  
  constructor() { }  
  ngOnInit() {    
    this.board.addGoblin();
    this.startCount();    
  }
  
  startCount() {
    setInterval(()=> {
      this.board.addGoblin()  
    }, 5000);
  }

  attackGoblin(gob) {
    gob.hp--;
    if (gob.hp <= 0) {
      this.board.removeGoblin(gob);
    }
  }
}



class Board {
  goblins: Goblin[] = [];
  addGoblin(){
    this.goblins.push(new Goblin(GetRandom(1, 4) + GetRandom(1, 4), GetRandom(0, 2)));
  }
  removeGoblin(gob){
    for (let i = 0; i < this.goblins.length; i++) {
      if (this.goblins[i] === gob) {        
        this.goblins.splice(i, 1);
      }      
    }
  }
}


class Goblin {
  static idCount: number = 0;
  id: number;  
  constructor(public hp:number, public lane:number) {
    this.id = Goblin.idCount++;
  }  
}

export function GetRandom(min, max) {
  return min + Math.floor(Math.random() * Math.floor((max + 1) - min));
}
