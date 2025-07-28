import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content3',
  imports: [CommonModule],
  templateUrl: './content3.html',
  styleUrl: './content3.css'
})
export class Content3 {
crops = [
    {
      name: 'Wheat',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_142950790_Preview.jpeg?raw=true',
      info: 'Wheat takes about 120–140 days from sowing to harvest. Best sowing time is Nov–Dec, harvested in Mar–Apr.'
    },
    {
      name: 'Rice',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_228762020_Preview.jpeg?raw=true',
      info: 'Rice matures in 100–150 days. Kharif sowing is done June–July, harvested in Oct–Nov. Needs high water.'
    },
    {
      name: 'Maize',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_543339060_Preview.jpeg?raw=true',
      info: 'Maize matures in 90–120 days. Best grown in June or Sept, harvested around Oct–Dec.'
    },
    {
      name: 'Sugarcane',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_538511475_Preview.jpeg?raw=true',
      info: 'Sugarcane takes 10–14 months. Plant Feb–Mar or Sept–Oct. Harvest in Dec–Feb.'
    },
    {
      name: 'Cotton',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_128931723_Preview.jpeg?raw=true',
      info: 'Cotton needs 160–180 days. Sown in April–May, harvested in Oct–Jan. Grows in warm climate.'
    },
    {
      name: 'Tomato',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_250149090_Preview.jpeg?raw=true',
      info: 'Tomato grows in 75–90 days. Plant in Aug–Oct or Jan–Feb. Needs moderate climate.'
    },
    {
      name: 'Brinjal',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_1452420333_Preview.jpeg?raw=true',
      info: 'Brinjal takes 100–120 days. Sown June–July or Jan–Feb. Harvested in 3–4 months.'
    },
    {
      name: 'Groundnut',
      image: 'https://github.com/Sai630414/agriculture-recomendation-system/blob/master/src/assets/AdobeStock_1049187248_Preview.jpeg?raw=true',
      info: 'Groundnut takes 100–120 days. Grown in June–July or Oct–Nov. Harvested in Oct–Dec.'
    }
  ];

  hoveredCropIndex: number | null = null;

  onHover(index: number) {
    this.hoveredCropIndex = index;
  }

  onLeave() {
    this.hoveredCropIndex = null;
  }
}
