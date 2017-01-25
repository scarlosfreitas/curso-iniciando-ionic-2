import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = HomePage;

  constructor(platform: Platform) {

    this.pages = [
      {component: HomePage,title: 'Home Page',icon: 'home'},
      {component: MenuTestPage,title: 'Home Test',icon: 'menu'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) : void {
    this.rootPage = page.component;
  }
}
