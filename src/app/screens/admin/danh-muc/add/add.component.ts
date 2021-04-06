import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cateForm: FormGroup;
  constructor(private cateService: CategoryService,
              private router: Router) { 
    this.cateForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    return new FormGroup({
      name: new FormControl('poly', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])
    });
  }

  get f(){
    return this.cateForm.controls;
  }

  saveCate(event: any){
    event.preventDefault();
    this.cateService.store(this.cateForm.value).subscribe(data => {
      this.router.navigate(['/admin/danh-muc']);
    })
  }

}
