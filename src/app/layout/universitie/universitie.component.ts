import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { UtilService } from 'src/app/services/util/util.service';
import { MessageService } from 'src/app/services/message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdduniComponent } from './adduni/adduni.component';


@Component({
  selector: 'app-universitie',
  templateUrl: './universitie.component.html',
  styleUrls: ['./universitie.component.scss']
})
export class UniversitieComponent implements OnInit {

  allData: any;
  id ='';
  constructor(private http: HttpService, private message: MessageService, public util: UtilService
    , private modalService: BsModalService) {
  }

  ngOnInit() {
    this.universitesdata();
  }

  universitesdata() {
    this.http.getData(ApiUrl.universitielist).subscribe(res => {
      // console.log(res, 'jsfhi')
      this.allData = res.data.data;
      // console.log(this.allData)
    })
  }


  deletitem(data, index) {
    this.message.confirm(`delete this ${this.util.title}`).then(result => {
      if (result.value) {
        const obj: any = {
          university_id: data._id,
          is_deleted: true

        };
        this.http.putData(ApiUrl.unidelete, obj).subscribe(() => {
          this.message.toast('success', SuccessErrorConst.deleteSuccess);
          this.allData.splice(index, 1);
        });
      }
    });

  }
  
  blockUnblock(data) {
    const obj: any = {
      university_id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.unidelete, obj).subscribe(() => {
      this.util.checkBlockUnblock(data);
    }, () => {
    });
  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AdduniComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if (data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.universitesdata();
    })
  }


}
