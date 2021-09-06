import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { UtilService } from 'src/app/services/util/util.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    allData: any;
    name :any;
    
    constructor(private http: HttpService, private message: MessageService, public util: UtilService) {
    }

    ngOnInit() {
        this.datalist();
    }
    
    datalist(){
        this.http.getData(ApiUrl.uerdata).subscribe(res =>{
           this.allData = res.data.data;
            console.log(res);
        },error => {})
    }

    deletitem(data, index) {
      const obj: any = {
        user_id: data._id,
        isDeleted: true
       
      };
      this.http.putData(ApiUrl.userdelete, obj).subscribe((res) => {
        this.allData.splice(index, 1)
      }, error => {});
      
    }
    
  //   Search(){
  //     if(this.name == ""){
  //       this.ngOnInit();
  //     }else{
  //       this.allData = this.allData.filter(res =>{
  //         return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()); 
  //       })
  //     }
  // }

}
