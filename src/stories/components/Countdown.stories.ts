import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'vristo-countdown-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Simple Countdown</div>
      <div style="display: flex; gap: 1.5rem; justify-content: center; padding: 2rem 0;">
        <div *ngFor="let unit of units" style="text-align: center;">
          <div style="background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 1rem 1.5rem; min-width: 80px;">
            <span style="font-size: 2rem; font-weight: 700; color: var(--primary);">{{ unit.value }}</span>
          </div>
          <span style="display: block; margin-top: 0.5rem; font-size: 0.75rem; font-weight: 600; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.05em;">
            {{ unit.label }}
          </span>
        </div>
      </div>
    </div>
  `,
})
class CountdownDemoComponent {
  units = [
    { label: 'Days', value: 12 },
    { label: 'Hours', value: 8 },
    { label: 'Minutes', value: 43 },
    { label: 'Seconds', value: 27 },
  ];
}

const meta: Meta<CountdownDemoComponent> = {
  title: 'Components/Countdown',
  component: CountdownDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Simple Countdown  
**Reference:** [Vristo Countdown](https://angular.vristo.sbthemes.com/component/countdown)

Displays a countdown timer with days, hours, minutes, and seconds blocks.
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CountdownDemoComponent>;
export const SimpleCountdown: Story = {};
