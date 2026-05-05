import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-carousel-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Loop Carousel</div>
      <div style="position: relative; overflow: hidden; border-radius: var(--radius-lg); background: var(--gray-100); height: 200px;">
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; transition: opacity 0.4s;">
          <div style="text-align: center;">
            <p style="font-size: 1.25rem; font-weight: 600; color: var(--gray-700); margin: 0;">Slide {{ currentSlide + 1 }} of {{ totalSlides }}</p>
            <p style="font-size: 0.875rem; color: var(--gray-500); margin: 0.5rem 0 0;">Carousel loops continuously — no dead end.</p>
          </div>
        </div>
        <button style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); background: var(--white); border: 1px solid var(--gray-200); border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; display: flex; align-items: center; justify-content: center;"
                (click)="prev()">‹</button>
        <button style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: var(--white); border: 1px solid var(--gray-200); border-radius: 50%; width: 2rem; height: 2rem; cursor: pointer; display: flex; align-items: center; justify-content: center;"
                (click)="next()">›</button>
      </div>
      <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 0.75rem;">
        <span *ngFor="let s of [0,1,2]; let i = index"
              style="width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: background 0.2s;"
              [style.background]="currentSlide === i ? 'var(--primary)' : 'var(--gray-300)'"
              (click)="currentSlide = i"></span>
      </div>
    </div>
  `,
})
class CarouselDemoComponent {
  currentSlide = 0;
  totalSlides = 3;
  next() { this.currentSlide = (this.currentSlide + 1) % this.totalSlides; }
  prev() { this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides; }
}

const meta: Meta<CarouselDemoComponent> = {
  title: 'Components/Carousel',
  component: CarouselDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic Loop  
**ReportAll Override:** Changed to loop (wraps from last slide back to first)  
**Reference:** [Vristo Carousel](https://angular.vristo.sbthemes.com/component/carousel)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CarouselDemoComponent>;
export const BasicLoop: Story = {};
