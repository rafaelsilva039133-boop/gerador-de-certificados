import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from '../../components/primary-button/primary-button';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  selector: 'app-certificados-form',
  styleUrl: './certificados-form.scss',
  templateUrl: './certificados-form.html',
})
export class CertificadosForm {
  nome: string = "";
  atividade: string = "";
  atividades: string[] = ['angular', 'react'];
}
