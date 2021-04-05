import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cateForm: FormGroup;
  constructor() { 
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

}
