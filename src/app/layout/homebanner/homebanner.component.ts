import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddbannerComponent } from './addbanner/addbanner.component';



@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.scss']
})
export class HomebannerComponent implements OnInit {

  showData :any ;

  constructor(private http :HttpService,   private modalService : BsModalService ) { }

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
    const obj: any = {
      _id: data._id,
      isDeleted: true
    };
    this.http.putData(ApiUrl.deletebanner, obj).subscribe((res) => {
      this.showData.splice(index, 1)
    }, error => {});
  }

}
