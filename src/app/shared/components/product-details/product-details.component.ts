import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from '../../../services/util/util.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    public onClose: Subject<{}> = new Subject();
    modalData: any;

    constructor(private message: MessageService, private http: HttpService,
                public bsModalRef: BsModalRef, public util: UtilService
    ) {
    }

    ngOnInit() {
    }

    closeModal() {
        this.bsModalRef.hide();
    }

}


