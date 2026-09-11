import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPublic } from '../../components/navbar-public/navbar-public';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, NavbarPublic, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {

}
