import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-progress-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Progress Bar</div>
      <div *ngFor="let bar of bars" style="margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.375rem;">
          <span style="font-size: 0.8125rem; font-weight: 600; color: var(--gray-700);">{{ bar.label }}</span>
          <span style="font-size: 0.8125rem; color: var(--gray-500);">{{ bar.value }}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar" [style.width.%]="bar.value" [style.background]="bar.color"></div>
        </div>
      </div>
    </div>
  `,
})
class ProgressDemoComponent {
  bars = [
    { label: 'Primary', value: 65, color: 'var(--primary)' },
    { label: 'Success', value: 85, color: 'var(--success)' },
    { label: 'Info', value: 45, color: 'var(--info)' },
    { label: 'Warning', value: 30, color: 'var(--warning)' },
    { label: 'Danger', value: 15, color: 'var(--danger)' },
  ];
}

const meta: Meta<ProgressDemoComponent> = {
  title: 'Elements/Progress Bar',
  component: ProgressDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic\n**Reference:** [Vristo Progress Bar](https://angular.vristo.sbthemes.com/element/progress-bar)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ProgressDemoComponent>;
export const BasicProgressBar: Story = {};
