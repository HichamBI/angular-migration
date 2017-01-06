import { PlatformRef, Type } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';
import  module from './../app/app'

export function bootstrap(
    platform: PlatformRef, Ng2Module: Type<{}>, element: Element, ng1Module: angular.IModule) {
    // We bootstrap the Angular 2 appModule first; then when it is ready (async)
    // We bootstrap the Angular 1 appModule on the bootstrap element
    return platform.bootstrapModule(Ng2Module).then(ref => {
        let upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(element, [ng1Module.name]);
        return upgrade;
    });
}

bootstrap(platformBrowserDynamic(), AppModule, document.body, module).then((ref) => {
    setTimeout(() => {
        console.log('initializing');
        ref.injector.get(Router).initialNavigation();
    }, 0);
});