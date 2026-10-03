import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { PrimaryButton } from './primary-button/primary-button';
import { SecondaryButton } from './secondary-button/secondary-button';
import { ItemCertificado } from './item-certificado/item-certificado';
import { UiBase } from './components/ui-base/ui-base';
import { Certificados } from './pages/certificados/certificados';
import { CertificadosForm } from './pages/certificados-form/certificados-form';

@Component({
  imports: [Navbar, CertificadosForm, PrimaryButton, SecondaryButton, ItemCertificado, UiBase, Certificados, CertificadosForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gestao-de-certificados');
}
