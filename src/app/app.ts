import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { PrimaryButton } from './primary-button/primary-button';
import { SecondaryButton } from './secondary-button/secondary-button';
import { ItemCertificado } from './item-certificado/item-certificado';

@Component({
  imports: [Navbar, PrimaryButton, SecondaryButton, ItemCertificado],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gestao-de-certificados');
}
