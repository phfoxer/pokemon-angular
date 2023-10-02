import { Component, Input } from '@angular/core';
import { TPokemon } from '../../types';
import { environment } from 'src/environments/environment';
import { AppTools } from '../../tools';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public _pokemon!: TPokemon;
  public borderColor!: string;
  @Input() set pokemon(p: TPokemon) {
    this._pokemon = {
      ...p,
      image: environment.settings.mainImage.replace(':id', p.id.toString())
    };
  };

  extractColors(imageElement: HTMLImageElement) {
    this.borderColor = AppTools.extractColors(imageElement);
  }

  onError(image: any) {
    image.src = environment.settings.errorImage;
  }
}
