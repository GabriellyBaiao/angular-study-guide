import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'] // Corrigido para 'styleUrls'
})
export class UploadFileComponent implements OnInit {

  files!: Set<File>;

  constructor(private service: UploadFileService){}

  ngOnInit() {
  }

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.target.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
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
    if(this.files && this.files.size > 0){
      this.service.upload(this.files, environment.BASE_URL + '/upload')
        .subscribe(response => console.log('Upload Concluído'))
    }
  }
}
