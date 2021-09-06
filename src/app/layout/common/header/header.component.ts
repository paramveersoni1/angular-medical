import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    showSideBar = true;

    constructor(
            public uiService: UtilService,
            public router: Router
    ) {
    }

    ngOnInit() {
    }

    closeNav() {
        if (this.showSideBar) {
            document.getElementById('app-sidebar').style.width = '230px';
            document.getElementById('app-content').style['margin-left'] = '230px';
        } else {
            document.getElementById('app-sidebar').style.width = '0';
            document.getElementById('app-content').style['margin-left'] = '0';

        }
    }

    fullScreen() {
        const elem = document.documentElement;
        const methodToBeInvoked = elem.requestFullscreen ||
                elem[`webkitRequestFullScreen`] || elem[`mozRequestFullscreen`] ||
                elem[`msRequestFullscreen`];
        if (methodToBeInvoked) {
            methodToBeInvoked.call(elem);
        }
    }

}
