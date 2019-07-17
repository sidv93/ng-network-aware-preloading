import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        console.log('in preload');
        if (shouldPreload(route)) {
            return load();
        } else {
            return EMPTY;
        }

        // const loadRoute = (delay) => delay
        //     ? timer(150).pipe(flatMap(_ => load()))
        //     : load();
        // return route.data && route.data.preload 
        //     ? loadRoute(route.data.delay)
        //     : of(null);
    }
}

export function shouldPreload(route: Route): boolean {
    const conn = navigator.connection;
    console.log(conn);
    if (conn) {
        if (conn.saveData) {
            return false;
        }
        const { effectiveType } = conn;
        console.log(effectiveType);

        if (effectiveType.includes('2g')) {
            return false;
        }
    }
    return true;
}