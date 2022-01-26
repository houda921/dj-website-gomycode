import { Component } from '@angular/core';
import { Card } from './software-craftsmanship-card/card';
import { CardService } from './software-craftsmanship-card/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vision',
  template: `
    <div class='vision'>
      <h1 class='page-title'>craftsmanship</h1>
      <div class='header'>
        <h2 class='title'>
          {{ 'entrust your work to someone who values quality' | titlecase }}
        </h2>
        <span class='intro'>
          Research shows that large software projects often fail.
          This was true in the past, but is still the case.
          By relying on real professionals, you can avoid many problems.
          But how do you recognise so-called 'craftsmanship'?
          That is what the experts in my field unanimously agree on and that is why they have set up a manifesto.
          I try to adhere to this so-called <a href='https://agilemanifesto.org/principles.html'>agile manifesto</a> on a daily basis.
          In this way, I try to contribute to projects that are successful.
          Below are the four principles that we try to adhere to on a daily basis.
        </span>
      </div>
      <div class='cards'>
        <div class='card-wrapper' *ngFor='let card of cards$ | async'>
          <app-software-craftsmanship-card class='card' [card]='card'></app-software-craftsmanship-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  cards$: Observable<Card[]>;

  constructor(private cardService: CardService) {
    this.cards$ = cardService.getCards$();
  }
}
