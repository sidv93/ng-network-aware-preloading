import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomPreloadingStrategy } from './custompreloadingstrategy';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sample',
        pathMatch: 'full'
    },
    {
        path: 'sample',
        loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule),
        data: { preload: true, delay: true }
    },
    {
        path: 'sample2',
        loadChildren: () => import('./sample2/sample2.module').then(m => m.Sample2Module),
        data: { preload: true, delay: true }
    }
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes,
    {
        preloadingStrategy: CustomPreloadingStrategy
    }
)