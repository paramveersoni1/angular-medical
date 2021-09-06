import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../../core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor( private http: HttpService ,private fb : FormBuilder, private bsModalRef : BsModalRef,
    private util:UtilService  ) { }

  ngOnInit(){
    this.onClose = new Subject();
  }

}
