import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { Certificado } from './pages/certificado/certificado';
import { CertificadosForm } from './pages/certificados-form/certificados-form';

export const routes: Routes = [
  {
    path: "",
    component:Certificados
  },
  {
    path: "certificados/novo",
    component: CertificadosForm
  },
  {
    path: "certificados/:id",
    component: Certificado
  }
];
