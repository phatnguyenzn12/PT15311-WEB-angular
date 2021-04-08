import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-demo-upload',
  templateUrl: './demo-upload.component.html',
  styleUrls: ['./demo-upload.component.css']
})
export class DemoUploadComponent implements OnInit {

  uploadForm: FormGroup;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage) { 
    this.uploadForm = new FormGroup({
      name: new FormControl(''),
      image: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  upload(event){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Uploads/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Uploads/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.uploadForm.value.image = url;
            console.log(url);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
