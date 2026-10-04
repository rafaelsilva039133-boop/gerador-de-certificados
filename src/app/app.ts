import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { UiBase } from './components/ui-base/ui-base';
import { Certificado } from './pages/certificado/certificado';

@Component({
  imports: [Navbar, UiBase, Certificado],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gestao-de-certificados');
}
