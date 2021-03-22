import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { HEROES } from '../../mock-data/HEROES';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Array<Hero> = HEROES;
  listSkill: Array<Skill> = [
    {
      id: 1,
      name: "java"
    },
    {
      id: 2,
      name: "C-Sharp"
    },
    {
      id: 3,
      name: "PHP"
    },
    {
      id: 4,
      name: "javascript"
    }
  ]
  formObject: Hero = {
    id: 0,
    name: "",
    image: "",
    skills: []
  }
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

  checkboxStatus(skillId: Number){
    let existed = this.formObject.skills.findIndex(el => el.id == skillId);
    return existed != -1;
  }

  updateFormAttr(attrName: string, attrValue: string){
    switch(attrName){
      case "id":
        this.formObject.id = Number(attrValue);
        break;
      case "name":
        this.formObject.name = attrValue;
        break;
      case "image":
        this.formObject.image = attrValue
        break;
    }
  }

  toggleFormSkill(formSkill: Skill, status: Boolean){
    if(status == true){
      let index = this.formObject.skills.findIndex(el => el.id == formSkill.id);
      if(index == -1){
        this.formObject.skills.push({...formSkill});
      }
    }else{
      this.formObject.skills = {...this.formObject}.skills.filter(el => el.id != formSkill.id);
    }
    console.log(this.formObject);
  }

  saveForm(event: any){
    event.preventDefault();
    // ktra nếu id đã tồn tại trong list heroes rồi
    // cập nhật lại dữ liệu của phần từ khớp với index
    // nếu id chưa tồn tại
    // thực hiện thêm mới => push data vào this.heroes
    let index = this.heroes.findIndex(
                                item => item.id == this.formObject.id
                              );
    if(index == -1){
      this.heroes.push({...this.formObject});
    }else{
      this.heroes[index] = {...this.formObject};
    }
    this.resetForm();
  }

  resetForm(){
    this.formObject = {
      id: 0,
      name: "",
      image: "",
      skills: []
    }
  }

  updateHero(hero: Hero){
    this.formObject = {...hero};
  }
  removeHero(hero: Hero){
    this.heroes = this.heroes.filter(el => el.id != hero.id);
  }
}
