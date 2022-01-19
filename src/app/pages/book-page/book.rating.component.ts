import { Component, Input } from '@angular/core';

import { faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'book-rating',
  template: `
    <div class="book-rating">
      <fa-icon
        *ngFor="let fullStar of fullStars"
        [icon]='faStar'
      ></fa-icon>
      <fa-icon
        *ngIf="hasAnHalfStar"
        [icon]="faHalfStar"
      ></fa-icon>
    </div>
  `,
  styles: [
    `
      .fa-star,
      .fa-star-half-empty,
      .fa-star-o {
        color: orange;
      }

      .book-rating {
        min-width: 100px;
      }
    `
  ]
})
export class BookRatingComponent {
  private readonly MAX_NUMBER_OF_STARS = 5;

  faStar = faStar;
  faHalfStar = faStarHalf;

  @Input()
  rating = 0;

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
}
