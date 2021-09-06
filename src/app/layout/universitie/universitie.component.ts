import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { UtilService } from 'src/app/services/util/util.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-universitie',
  templateUrl: './universitie.component.html',
  styleUrls: ['./universitie.component.scss']
})
export class UniversitieComponent implements OnInit {

  allData: any;

  constructor(private http: HttpService, private message: MessageService, public util: UtilService) {
  }

  ngOnInit() {
    this.universitesdata();
  }

  universitesdata(){
     this.http.getData(ApiUrl.universitielist).subscribe(res => {
         
        this.allData = res.data.data;
        console.log(this.allData)
     })
  }

}
