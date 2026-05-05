import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-accordion-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Accordion — Without Spacing</div>
      <div>
        <div *ngFor="let item of items; let i = index" class="accordion-item">
          <div class="accordion-header" (click)="toggle(i)">
            <span>{{ item.title }}</span>
            <span style="font-size: 0.75rem; transition: transform 0.2s;"
                  [style.transform]="openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'">
              ▼
            </span>
          </div>
          <div class="accordion-body" *ngIf="openIndex === i">
            <p style="color: var(--gray-600); font-size: 0.875rem; margin: 0;">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
class AccordionDemoComponent {
  openIndex = 0;
  items = [
    { title: 'Collapsible Group Item #1', body: 'This accordion uses the "without spacing" variant — items are flush against each other with no gap in between, per the ReportAll audit.' },
    { title: 'Collapsible Group Item #2', body: 'Second panel content. Only one panel opens at a time; clicking another collapses the previous one.' },
    { title: 'Collapsible Group Item #3', body: 'Third panel content. The first and last items receive border-radius while middle items are flat-edged.' },
  ];
  toggle(i: number) { this.openIndex = this.openIndex === i ? -1 : i; }
}

const meta: Meta<AccordionDemoComponent> = {
  title: 'Components/Accordion',
  component: AccordionDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic — Without Spacing  
**ReportAll Override:** Changed to without spacing (items flush, no gap)  
**Reference:** [Vristo Accordion](https://angular.vristo.sbthemes.com/component/accordion)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<AccordionDemoComponent>;
export const BasicWithoutSpacing: Story = {};
