import {Component, ViewChild} from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {MdInputModule} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-upload',
  templateUrl: 'uploadFile.html'
})
export class uploadFile {
  @ViewChild('fileInput') fileInput;
  constructor(private tokenService: Angular2TokenService) {}

    upload() {
      let fileBrowser = this.fileInput.nativeElement;
      if (fileBrowser.files && fileBrowser.files[0]) {
        const formData = new FormData();
        formData.append("image", fileBrowser.files[0]);
        this.projectService.upload(formData, this.project.id).subscribe(res => {
          // do stuff w/my uploaded file
        });
      }
    }
}
@Injectable()
export class ProjectService {
  upload(formData, options, id) {
    let headers = this.tokenService.currentAuthHeaders;
    headers.delete('Content-Type');
    let options = new RequestOptions({ headers: headers });

    return this.tokenService.request({
      method: 'post',
      url: `http://localhost:3000/api/projects/${id}/upload`,
      body: formData,
      headers: options.headers
    }).map(res => res.json());
  }
}
