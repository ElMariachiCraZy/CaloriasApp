import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../modelos/user";
import { NavController, NavParams, ModalController } from "@ionic/angular";
import * as $ from "jquery";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private ofauth: AngularFireAuth,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private routers: Router
  ) {}
  user = {} as User;

  //Funcion asincrona para comprobar las credenciales del usuario con la base de datos y redirigirlo
  async login(user: User) {
    try {
      const result = this.ofauth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      console.log(result);
      if (result) {
        this.routers.navigateByUrl("/menu/ayuda");
      } else {
        this.navCtrl.navigateForward("/login");
      }
    } catch (e) {}
  }

  //Se declara el contenido de los campos de texto vacios
  ngOnInit() {
    $("#email").text("");
    $("#password").text("");
  }
}
