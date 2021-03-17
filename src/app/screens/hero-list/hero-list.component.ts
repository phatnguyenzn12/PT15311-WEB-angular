import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-data/HEROES';
import { Hero } from '../../models/hero';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Array<Hero> = HEROES;
  /**
   * tạo model + dữ liệu cho danh sách monster
   * monster gồm:
   * id, name, detail, image, spells (đối tượng, phép thuật)
   * trong spell gồm:
   * id, name, image
   * hiển thị danh sách monster ở dưới của danh sách heroes
   */
  constructor() { }

  ngOnInit(): void {
  }

}
