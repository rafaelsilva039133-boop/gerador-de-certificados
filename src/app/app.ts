import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { UiBase } from './components/ui-base/ui-base';
import { CertificadosForm } from './pages/certificados-form/certificados-form';

@Component({
  imports: [Navbar, CertificadosForm, UiBase, CertificadosForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gestao-de-certificados');
}
