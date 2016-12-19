import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Database } from '../../providers/Database';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Database]
})
export class HomePage {

  constructor(public navCtrl: NavController, public database: Database) {

  }

  ionViewDidLoad(){
    console.log('Home View Loaded')
  }

}
