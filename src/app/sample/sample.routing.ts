import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'ramdom',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: RandomComponent
    }
];

export const router: ModuleWithProviders = RouterModule.forChild(routes);
