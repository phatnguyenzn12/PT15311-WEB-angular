import { Component, OnInit, 
          Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'hero-unit',
  templateUrl: './hero-unit.component.html',
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {
  @Input("hero-data") heroData: Hero;
  @Output() delete = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit(): void {
  }
  updateHero(){

  }

  removeHero(){
    this.delete.emit(this.heroData);
  }

}
