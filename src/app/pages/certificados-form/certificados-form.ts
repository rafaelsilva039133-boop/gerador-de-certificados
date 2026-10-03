import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from '../../components/primary-button/primary-button';

@Component({
  imports: [SecondaryButton, PrimaryButton],
  selector: 'app-certificados-form',
  styleUrl: './certificados-form.scss',
  templateUrl: './certificados-form.html',
})
export class CertificadosForm {}
