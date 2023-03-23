import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileWProgress } from '../../types';

@Component({
  selector: 'lib-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  @Input() name: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() isMultipleFiles: boolean = false;
  supportedFormats: string[] = ['JPEG', 'PNG', 'GIF', 'PDF', 'Word'];
  files: FileWProgress[] = [];
  currentLoadingIndex: number = 0;

  constructor() { }

  onFileChange(e: any) {
    this.setFiles(e.target.files);
  }
  onFileDroped(e: any) {
    this.setFiles(e)
  }

  labelClickHandler(e: Event) {
    if ((e.target as HTMLInputElement).type !== 'file')
      e.preventDefault()
  }

  setFiles(filesList: Array<FileWProgress>) {
    for (const item of filesList) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(this.currentLoadingIndex);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.currentLoadingIndex = index;
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 100);
      }
    }, 200);
  }

  deleteFile(event: number) {
    this.files = this.files.filter((el: any, index: number) => {
      if (index === event) return
      else return el
    })
  }
}
