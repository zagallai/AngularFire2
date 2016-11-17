import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// Importing pages
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCp43CPdFgOXIF0IQBnXCleby9sHgeaY6M",
  authDomain: "af2-lists-80abe.firebaseapp.com",
  databaseURL: "https://af2-lists-80abe.firebaseio.com",
  storageBucket: "af2-lists-80abe.appspot.com",
  messagingSenderId: "956801560644"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
  ]
})
export class AppModule {}
