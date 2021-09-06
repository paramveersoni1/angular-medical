import { Component, OnInit } from '@angular/core';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { UtilService } from 'src/app/services/util/util.service';
import { MessageService } from 'src/app/services/message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    allData: any =[];
    name :any;
    
    constructor(private http: HttpService, private message: MessageService, public util: UtilService) {
    }

    ngOnInit():void {
        this.datalist();
    }
    
    datalist(){
        this.http.getData(ApiUrl.uerdata).subscribe(res =>{
           this.allData = res.data.data;
            console.log(res);
        },error => {})
    }

    deletitem(data, index) {
      this.message.confirm(`delete this ${this.util.title}`).then(result => {
        if (result.value) {
            const obj: any = {
              user_id: data._id,
                is_deleted: true
                
            };
            this.http.putData(ApiUrl.userdelete,obj).subscribe(() => {
                this.message.toast('success', SuccessErrorConst.deleteSuccess);
                this.allData.splice(index,1);
            });
        }
    });
      
    }
  blockUnblock(data) {
        const obj: any = {
          user_id: data._id,
            is_blocked: !data.is_blocked
        };
        this.http.putData(ApiUrl.userdelete,obj).subscribe(() => {
            this.util.checkBlockUnblock(data);
        }, () => {
     });
}

// deleteData(data,index) {
//     this.message.confirm(`delete this ${this.util.title}`).then(result => {
//         if (result.value) {
//             const obj: any = {
//               user_id: data._id,
//                 is_deleted: true
//             };
//             this.http.putData(ApiUrl.userdelete,obj,true).subscribe(() => {
//                 this.message.toast('success', SuccessErrorConst.deleteSuccess);
//                 this.allData.splice(index,1);
//             }, () => {
//             });
//         }
//     });

// }
}