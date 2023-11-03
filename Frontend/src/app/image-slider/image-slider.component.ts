import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  title= 'image-slider';

  imageSize: any = {
    width: 300, height: 428, space: 3
  }

  imageObject: Array<object> = [
    {
      image: 'https://images.justwatch.com/poster/8668157/s592/matrix.webp',
      thumbImage: 'https://images.justwatch.com/poster/8668157/s592/matrix.webp',
      alt: 'The Matrix',
      //title: 'Image 1'
    }, {
      image: 'https://images.justwatch.com/poster/8698860/s592/the-godfather-part-i.webp',
      thumbImage: 'https://images.justwatch.com/poster/8698860/s592/the-godfather-part-i.webp',
      //title: 'Image 2',
      alt: 'The Godfather'
    }, {
      image: '	https://images.justwatch.com/poster/181049289/s592/forrest-gump.webp',
      thumbImage: '	https://images.justwatch.com/poster/181049289/s592/forrest-gump.webp',
      //title: 'Image 3',
      alt: 'Forest Gump'
    }, {
      image: 'https://images.justwatch.com/poster/8652078/s592/the-shawshank-redemption.webp',
      thumbImage: 'https://images.justwatch.com/poster/8652078/s592/the-shawshank-redemption.webp',
      //title: 'Image 4',
      alt: 'The Shawshank Redemption'
    }, {
      image: 'https://images.justwatch.com/poster/8695539/s592/batman-the-dark-knight.webp',
      thumbImage: 'https://images.justwatch.com/poster/8695539/s592/batman-the-dark-knight.webp',
      //title: 'Image 5',
      alt: 'The Dark Knight'
    }, {
      image: 'https://images.justwatch.com/poster/45534539/s592/star-wars-episode-iv-a-new-hope.webp',
      thumbImage: 'https://images.justwatch.com/poster/45534539/s592/star-wars-episode-iv-a-new-hope.webp',
      //title: 'Image 6',
      alt: 'A New Hope'
    }, {
      image: '	https://images.justwatch.com/poster/304338085/s592/the-silence-of-the-lambs.webp',
      thumbImage: '	https://images.justwatch.com/poster/304338085/s592/the-silence-of-the-lambs.webp',
      //title: 'Image 7',
      alt: 'The Silence of the Lambs'
    }
];
}
