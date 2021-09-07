import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { UtilService } from 'src/app/services/util/util.service';
import { MessageService } from 'src/app/services/message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddpaymentplanComponent } from './addpaymentplan/addpaymentplan.component';


@Component({
  selector: 'app-paymentplan',
  templateUrl: './paymentplan.component.html',
  styleUrls: ['./paymentplan.component.scss']
})
export class PaymentplanComponent implements OnInit {
  showData: any;
  id = '';

  constructor(private http: HttpService, private message: MessageService, public util: UtilService
    , private modalService: BsModalService) {
  }

  ngOnInit(){
    this.Getdata();
  }
  Getdata(){
     this.http.getData(ApiUrl.showplans).subscribe(res => {
         this.showData = res.data.data;
         console.log(this.showData)
     })
  }
  deletitem(data, index) {
    this.message.confirm(`delete this ${this.util.title}`).then(result => {
      if (result.value) {
        const obj: any = {
          _id: data._id,
          is_deleted: true

        };
        this.http.putData(ApiUrl.deleteplans, obj).subscribe(() => {
          this.message.toast('success', SuccessErrorConst.deleteSuccess);
          this.showData.splice(index, 1);
        });
      }
    });

  }
  
  blockUnblock(data) {
    const obj: any = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(ApiUrl.deleteplans, obj).subscribe(() => {
      this.util.checkBlockUnblock(data);
    }, () => {
    });
  }

  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddpaymentplanComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if (data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this. Getdata();
    })
  }



}
