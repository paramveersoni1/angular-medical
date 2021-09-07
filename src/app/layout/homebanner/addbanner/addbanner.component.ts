import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.scss']
})
export class AddbannerComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();

  form: FormGroup;
  showError = false;
  modalData: any;
  picture:any=[];

  id = '';

  constructor(private http: HttpService, private fb: FormBuilder, private bsModalRef: BsModalRef,
    private util: UtilService) { }



  ngOnInit() {
    this.onClose = new Subject();
    this.bannerData();
  }

  bannerData() {
    this.form = this.fb.group({
      desktop_img_url: [[{}], Validators.required],
      description: this.fb.array([])

    });
    this.addItem('ENGLISH');
    this.addItem('FRENCH');
  }
  addItem(language) {
    let controls = <FormArray>this.form.controls.description;
    controls.push(this.createItem(language));
  }

  createItem(language): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      language_id: [language]
    });
  }

  get description(): FormArray {
    return this.form.get('description') as FormArray;
  }

  patchData(data) {
    this.id = data._id;
    this.form.patchValue({
      desktop_img_url: data.desktop_img_url,
      name: data.description,
    })
  }

  selectImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const obj = {
        pic: event.target.files[0]
      };
      this.uploadImage(obj);
    }
  }

  uploadImage(obj) {
    this.http.uploadImageService(ApiUrl.upload_attachment, obj, true).subscribe(response => {
      let images = this.form.value.desktop_img_url;
      images.push(response.data.s3Url);
      this.form.controls.picture.setValue(images);   
      document.getElementById('image')[`value`] = '';
    }, () => {
      document.getElementById('image')[`value`] = '';
    });
  }

  removeImage(index) {
    let images = this.form.value.picture;
    images.splice(index, 1);
    this.form.controls.desktop_img_url.setValue(images);
  }

  addEdit() {
    console.log(this.form.value)
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      }
      console.log(obj, "edsknfewn")
      this.http.postData(ApiUrl.bannerAdd, obj).subscribe(() => {
        this.onClose.next();
        this.bsModalRef.hide();
      },
      );
      console.log(this.form.value)
    }
  }


}