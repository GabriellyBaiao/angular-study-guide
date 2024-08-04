import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { environment } from '../../../environments/environment';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'] // Corrigido para 'styleUrls'
})
export class UploadFileComponent implements OnInit {

  files!: Set<File>;
  progress = 0;

  constructor(private service: UploadFileService) {}

  ngOnInit() {}

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.target.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames: string[] = [];
    this.files = new Set<File>();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    const customFileLabel = document.getElementById('customFileLabel');
    if (customFileLabel) {
      customFileLabel.innerHTML = fileNames.join(', ');
    }
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment.BASE_URL + '/upload')
        .subscribe((event: HttpEvent<Object>) => {
          if (event.type === HttpEventType.UploadProgress) {
            if (event.total) {
              const percentDone = Math.round((event.loaded * 100) / event.total);
              console.log('Progress', percentDone);
              this.progress = percentDone;
            }
          }
        });
    }
  }
}
