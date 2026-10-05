import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-item-certificado',
  styleUrl: './item-certificado.scss',
  templateUrl: './item-certificado.html',
})
export class ItemCertificado {
  id:string = '6';
}
