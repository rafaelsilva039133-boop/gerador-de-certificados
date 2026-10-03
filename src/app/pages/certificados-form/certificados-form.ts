import { Component } from '@angular/core';
import { SecondaryButton } from '../../secondary-button/secondary-button';
import { PrimaryButton } from '../../primary-button/primary-button';

@Component({
  imports: [SecondaryButton, PrimaryButton],
  selector: 'app-certificados-form',
  styleUrl: './certificados-form.scss',
  templateUrl: './certificados-form.html',
})
export class CertificadosForm {}
