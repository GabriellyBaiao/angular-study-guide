import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'] // Corrigido para 'styleUrls'
})
export class UploadFileComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.target.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
    }

    const customFileLabel = document.getElementById('customFileLabel');
    if (customFileLabel) {
      customFileLabel.innerHTML = fileNames.join(', ');
    }
  }
}
