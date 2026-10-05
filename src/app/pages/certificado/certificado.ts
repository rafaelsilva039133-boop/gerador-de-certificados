import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';


@Component({
  imports: [SecondaryButton, RouterLink],
  selector: 'app-certificado',
  styleUrl: './certificado.scss',
  templateUrl: './certificado.html',
})
export class Certificado {}
