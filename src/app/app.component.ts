import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';

import { MenuController } from 'ionic-angular';

import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = HomePage;

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      {component: HomePage, title: 'Home Page',icon: 'home'},
      {component: HomePage, title: 'Home Test',icon: 'menu'},
      {component: GeneratedTestPage, title: 'GeneratedTestPage',icon: 'menu'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
    console.log('teste');
  }
}
