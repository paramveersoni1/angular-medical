import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from 'src/app/services/util/util.service';


@Component({
  selector: 'app-adduni',
  templateUrl: './adduni.component.html',
  styleUrls: ['./adduni.component.scss']
})
export class AdduniComponent implements OnInit {

  public onClose: Subject<{}> = new Subject();

  form: FormGroup;
  showError = false;
  modalData: any;

  id = '';

  constructor(private http: HttpService, private fb: FormBuilder, private bsModalRef: BsModalRef,
    private util: UtilService) { }



  ngOnInit() {
    this.onClose = new Subject();
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      icon: ['', Validators.required],
      name: this.fb.array([])
    });
    this.addItem('ENGLISH');
    this.addItem('FRENCH');
  }

  addItem(language) {
    let controls = <FormArray>this.form.controls.name;
    controls.push(this.createItem(language));
  }

  createItem(language): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      language_id: [language]
    });
  }

  get name(): FormArray {
    return this.form.get('name') as FormArray;
  }

  
  addEdit() {
    console.log(this.form.value)
    if (this.form.valid) {
      const obj = JSON.parse(JSON.stringify(this.form.value));
      if (this.modalData) {
        obj[`_id`] = this.modalData._id;
      } 
      console.log(obj,"edsknfewn")
      this.http.postData(ApiUrl.addUnilist, obj).subscribe(() => {
        this.onClose.next();
        this.bsModalRef.hide();
      },  
      );
      console.log(this.form.value)
    }
  }


}
