import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-counter-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Simple Counter</div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1.5rem; padding: 1rem 0;">
        <div *ngFor="let counter of counters" style="text-align: center; padding: 1.5rem; background: var(--gray-50); border-radius: var(--radius-lg);">
          <div [style.color]="counter.color" style="font-size: 2.5rem; font-weight: 800; line-height: 1;">
            {{ counter.value }}{{ counter.suffix }}
          </div>
          <p style="margin: 0.5rem 0 0; font-size: 0.8125rem; color: var(--gray-500); font-weight: 600;">{{ counter.label }}</p>
        </div>
      </div>
    </div>
  `,
})
class CounterDemoComponent {
  counters = [
    { value: 1420, suffix: '+', label: 'Active Users', color: 'var(--primary)' },
    { value: 862, suffix: '', label: 'Reports Generated', color: 'var(--info)' },
    { value: 98, suffix: '%', label: 'Uptime', color: 'var(--success)' },
    { value: 24, suffix: '/7', label: 'Support', color: 'var(--warning)' },
  ];
}

const meta: Meta<CounterDemoComponent> = {
  title: 'Components/Counter',
  component: CounterDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Simple Counter  
**Reference:** [Vristo Counter](https://angular.vristo.sbthemes.com/component/counter)

Animated stat counters. In production, these animate on scroll into view.
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CounterDemoComponent>;
export const SimpleCounter: Story = {};
