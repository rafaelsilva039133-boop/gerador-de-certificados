import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';

@Component({
  imports: [SecondaryButton, ItemCertificado],
  selector: 'app-certificados',
  styleUrl: './certificados.scss',
  templateUrl: './certificados.html',
})
export class Certificados {}
