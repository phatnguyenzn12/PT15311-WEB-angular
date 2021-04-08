import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-upload',
  templateUrl: './demo-upload.component.html',
  styleUrls: ['./demo-upload.component.css']
})
export class DemoUploadComponent implements OnInit {

  uploadForm: FormGroup;
  constructor() { 
    this.uploadForm = new FormGroup({
      name: new FormControl(''),
      image: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

}
