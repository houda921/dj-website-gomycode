import { Component, OnInit } from '@angular/core';
import { CertificateService } from './certificate.service';
import { Observable } from 'rxjs';
import { Certificate } from './certificate';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'certificate-overview',
  template: `
<!--    <h1 class='page-title'>Books</h1>-->
<!--    <div class='header'>-->
<!--      <h2 class='title'>-->
<!--        {{ "More data please" | titlecase }}-->
<!--      </h2>-->
<!--      <span class='intro'>-->
<!--        Below is a table of things worth sharing. I have been a speaker at conferences and have also attended some as a visitor throughout my career. These are very nice experiences! In addition, following courses on a regular basis is very important. Some courses I forgot to list in the past, but here you will find some important ones. In the beginning of my career, I also attached importance to certificates. Nowadays, I focus more on the training and on my clients, but I still share them with some pride.-->
<!--      </span>-->
<!--    </div>-->
<!--    <ng-container *ngIf="certificates$ | async as certificates">-->
<!--      <table class="table table-striped table-responsive">-->
<!--        <thead>-->
<!--          <tr>-->
<!--            <th scope="col">#</th>-->
<!--            <th scope="col">Name</th>-->
<!--            <th scope="col">Organisation</th>-->
<!--            <th scope="col">Issue date</th>-->
<!--            <th scope="col">Type</th>-->
<!--          </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--          <tr *ngFor="let certificate of certificates; index as i">-->
<!--            <th scope="row">{{ i + 1 }}</th>-->
<!--            <td>-->
<!--              <ngb-highlight-->
<!--                class="certificate-name"-->
<!--                [result]="certificate.name"-->
<!--              ></ngb-highlight>-->
<!--              <a-->
<!--                *ngIf="certificate.credentialUrl.length > 0"-->
<!--                class="ms-1"-->
<!--                target="_blank"-->
<!--                href="{{ certificate.credentialUrl }}"-->
<!--                ><fa-icon [icon]='faExternalLink'></fa-icon-->
<!--              ></a>-->
<!--            </td>-->
<!--            <td>-->
<!--              <ngb-highlight-->
<!--                class="certificate-organization"-->
<!--                [result]="certificate.organization"-->
<!--              ></ngb-highlight>-->
<!--            </td>-->
<!--            <td>-->
<!--              <ngb-highlight-->
<!--                class="certificate-issue-date"-->
<!--                [result]="certificate.issueDate | dateLocale: 'MMMM YYYY'"-->
<!--              ></ngb-highlight>-->
<!--            </td>-->
<!--            <td>-->
<!--              <ngb-highlight-->
<!--                class="certificate-type"-->
<!--                [result]="certificate.certificateType"-->
<!--              ></ngb-highlight>-->
<!--            </td>-->
<!--          </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </ng-container>-->
  `,
  styles: [
    `
      .certificate-type {
        text-transform: capitalize;
      }

      .page-title {
        font-weight: 200;
        padding: 2rem 5rem;
        text-transform: uppercase;
        margin: 0;
        background-color: #008073 !important;
        color: #FFFFFF !important;
      }

      .header {
        background-color: #31525b;
        color: #fff;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

      .title {
        font-size: 3rem;
        font-family: Roboto, serif;
      }

      .intro {
        font-family: Roboto, sans-serif;
        line-height: 1.7rem;
      }

      @media only screen and (max-width: 400px) {
        .header {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      @media only screen and (min-width: 401px) and (max-width: 1000px) {
        .header {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      @media only screen and (min-width: 1001px) {
        .header {
          padding-left: 5rem;
          padding-right: 5rem;
        }
      }
    `
  ]
})
export class CertificateOverviewComponent implements OnInit {
  certificates$: Observable<Certificate[]>;

  faExternalLink = faExternalLinkAlt;

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates$ = this.certificateService.getCertificates$();
  }
}
