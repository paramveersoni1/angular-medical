import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { UtilService } from 'src/app/services/util/util.service';
import { MessageService } from 'src/app/services/message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddbannerComponent } from './addbanner/addbanner.component';



@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.scss']
})
export class HomebannerComponent implements OnInit {

  showData :any ;

  constructor(private http: HttpService, private message: MessageService, public util: UtilService
    , private modalService: BsModalService) {
  }
  ngOnInit(){
    this.GetData()
  }
  GetData(){
    this.http.getData(ApiUrl.banners).subscribe(res =>{
      console.log(res)
      this.showData = res.data.data;
      console.log(this.showData)
    })
  }
  
  addEditModalOpen(data?: any) {
    const modalRef = this.modalService.show(AddbannerComponent, {
      backdrop: 'static',
      keyboard: false,
      class: 'model-more-lg'
    });
    if(data) {
      modalRef.content.patchData(data);
    }
    modalRef.content.onClose.subscribe(res => {
      this.GetData();
    })
  }

  deletitem(data, index) {
    this.message.confirm(`delete this ${this.util.title}`).then(result => {
      if (result.value) {
        const obj: any = {
          _id: data._id,
          is_deleted: true

        };
        this.http.putData(ApiUrl.deletebanner, obj).subscribe(() => {
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
    this.http.putData(ApiUrl.deletebanner, obj).subscribe(() => {
      this.util.checkBlockUnblock(data);
    }, () => {
    });
  }

}
