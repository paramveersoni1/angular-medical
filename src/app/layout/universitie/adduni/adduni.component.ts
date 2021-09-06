import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  form : FormGroup;
  
  id = '';

  constructor( private http: HttpService ,private fb : FormBuilder, private bsModalRef : BsModalRef,
    private util:UtilService) { }
  


  ngOnInit(){
    this.onClose = new Subject();
  }

  adduniData(){
     this.form  = this.fb.group({
         name: ['', Validators.required ],
     });
  }

  

  formSubmit() {
    if (this.form.valid) {
      this.addEdit();
    }
  }

addEdit(){
  const obj = JSON.parse(JSON.stringify(this.form.value));
  // console.log(obj,'tyr')
  if (this.id) {
    obj['_id'] = this.id;
  }
  this.http.postData(ApiUrl.universitielist, obj).subscribe(res => {
    this.bsModalRef.hide();
    this.onClose.next();
  });  
}


}
