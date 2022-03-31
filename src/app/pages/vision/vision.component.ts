import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  template: `
    <div class='vision'>
      <h1 class='page-title' translate>page.title.vision</h1>
      <div class='header'>
        <h2 class='title' translate>vision.subtitle</h2>
        <span class='intro' translate>vision.intro</span>
      </div>
      <div class='cards'>
        <div class='card-wrapper'>
          <div class='card'>
            <div class='text-center'>
              <img [src]="'/assets/images/cogs.png'" height='200' [alt]="'vision.working.software' | translate" />
            </div>
            <div class='card-body'>
              <h5 class='card-title' translate>vision.working.software</h5>
              <p class='card-text' translate>vision.software.quality</p>
              <p class='card-text' translate>vision.keep.learning</p>
              <p class='card-text' translate>vision.testing</p>
            </div>
          </div>
        </div>
        <div class='card-wrapper'>
          <div class='card'>
            <div class='text-center'>
              <img [src]="'/assets/images/adding_value.png'" height='200' [alt]="'vision.change' | translate" />
            </div>
            <div class='card-body'>
              <h5 class='card-title' translate>vision.change</h5>
              <p class='card-text' translate>vision.rapid.progress</p>
              <p class='card-text' translate>vision.honesty</p>
              <p class='card-text' translate>vision.good.communication</p>
            </div>
          </div>
        </div>
        <div class='card-wrapper'>
          <div class='card'>
            <div class='text-center'>
              <img [src]="'/assets/images/professional.png'" height='200' [alt]="'vision.individuals.and.interactions' | translate" />
            </div>
            <div class='card-body'>
              <h5 class='card-title' translate>vision.individuals.and.interactions</h5>
              <p class='card-text' translate>vision.discussions</p>
              <p class='card-text' translate>vision.learn.and.adapt</p>
              <p class='card-text' translate>vision.knowledge.sharing</p>
            </div>
          </div>
        </div>
        <div class='card-wrapper'>
          <div class='card'>
            <div class='text-center'>
              <img [src]="'/assets/images/partnership.png'" height='200' [alt]="'vision.customer.collaboration' | translate" />
            </div>
            <div class='card-body'>
              <h5 class='card-title' translate>vision.customer.collaboration</h5>
              <p class='card-text' translate>vision.long.term.relationships</p>
              <p class='card-text' translate>vision.contract.negotiation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
}
