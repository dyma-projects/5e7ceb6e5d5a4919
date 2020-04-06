import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public color = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(): void {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
