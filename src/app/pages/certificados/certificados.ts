import { Component } from '@angular/core';
import { SecondaryButton } from '../../secondary-button/secondary-button';
import { ItemCertificado } from '../../item-certificado/item-certificado';

@Component({
  imports: [SecondaryButton, ItemCertificado],
  selector: 'app-certificados',
  styleUrl: './certificados.scss',
  templateUrl: './certificados.html',
})
export class Certificados {}
