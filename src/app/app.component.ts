import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutePartsService } from './services/router/router-parts.service';
import { SwUpdate } from '@angular/service-worker';
import { GlobalVariable } from './core/constant';
import { UtilService } from './services/util/util.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    appTitle = GlobalVariable.SITE_NAME;
    pageTitle = '';

    constructor(
            private router: Router,
            private activeRoute: ActivatedRoute,
            private routePartsService: RoutePartsService,
            private title: Title,
            private swUpdate: SwUpdate,
            public uiService: UtilService
    ) {
    }

    ngOnInit() {
        this.changePageTitle();
        this.checkNewVersion();
    }

    changePageTitle() {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange) => {
            const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);

            if (!routeParts.length) {
                return this.title.setTitle(this.appTitle);
            }
            // Extract title from parts;
            this.pageTitle = routeParts.reverse().map((part) => part.title).reduce((partA, partI) => `${partA} > ${partI}`);
            this.uiService.title = this.pageTitle;
            this.uiService.breadcrumb = routeParts[0].breadcrumb;
            this.pageTitle = `${this.appTitle} | ` + this.pageTitle;
            this.title.setTitle(this.pageTitle);

        });
    }

    checkNewVersion() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm('New version available. Load New Version?')) {
                    window.location.reload();
                }
            });
        }
    }

}
