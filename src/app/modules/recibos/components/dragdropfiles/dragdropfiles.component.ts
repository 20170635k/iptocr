import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { DragdropService } from 'src/app/core/services/dragdrop.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dragdropfiles',
  templateUrl: './dragdropfiles.component.html',
  styleUrls: ['./dragdropfiles.component.scss']
})
export class DragdropfilesComponent implements OnInit {

  files:File[];
  form: FormGroup;
  msg: string ="";
  progress: number = 0;
  constructor(
    public fb: FormBuilder,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.files = []

    this.form = this.fb.group({
      avatar: [null]
    })
  }
  ngOnInit() { }
  upload(e:FileList) {
    console.log(e)
    const fileListAsArray:File[] = Array.from(e);
    // const url = URL.createObjectURL(item);

    fileListAsArray.forEach((item) => {
      this.files.push(item)
    })
    // Set files form control
    this.form.patchValue({
      avatar: this.files
    })
    this.form.get('avatar')!.updateValueAndValidity()
    // Upload to server
    this.dragdropService.addFiles(this.form.value.avatar)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            if(event.total){
              this.progress = Math.round(event.loaded / event.total * 100);
              console.log(`Uploaded! ${this.progress}%`);
            }
            break;
          case HttpEventType.Response:
            console.log('File uploaded successfully!', event.body);
            setTimeout(() => {
              this.progress = 0;
              this.files = [];
              this.msg = "File uploaded successfully!"
            }, 3000);
        }
      })
  }
  // Clean Url
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
