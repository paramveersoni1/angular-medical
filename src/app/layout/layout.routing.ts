import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [

            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule',
                data: {breadcrumb: 'Users', title: 'user'}
            },
            {
                path: 'universitie',
                loadChildren: './universitie/universitie.module#UniversitieModule',
                data: {breadcrumb: 'universitie', title: 'universitie'}
            },
            {
                path: 'homebanner',
                loadChildren: './homebanner/homebanner.module#HomebannerModule',
                data: {breadcrumb: 'homebanner', title: 'homebanner'}
            },
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
