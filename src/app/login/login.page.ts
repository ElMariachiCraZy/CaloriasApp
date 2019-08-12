import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../modelos/user";
import { NavController, NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private ofauth: AngularFireAuth,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}
  user = {} as User;

  async login(user: User) {
    try {
      const result = this.ofauth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      console.log(result);
      if (result) {
        this.navCtrl.navigateForward("/bienvenida");
      }
    } catch (e) {
      console.error(e);
    }
  }

  ngOnInit() {}
}
