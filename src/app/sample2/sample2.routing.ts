import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Random2Component } from './random2/random2.component';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'ramdom',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: Random2Component
    }
];

export const router: ModuleWithProviders = RouterModule.forChild(routes);
