import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-input-mask-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Input Mask — Full Reference</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        All input mask patterns are approved. Masks enforce formatting as users type.
      </p>
      <div style="max-width: 400px;">
        <div *ngFor="let mask of masks" class="form-group">
          <label class="form-label">{{ mask.label }}</label>
          <input class="form-input" type="text" [placeholder]="mask.placeholder">
          <div class="form-help">Pattern: {{ mask.pattern }}</div>
        </div>
      </div>
    </div>
  `,
})
class InputMaskDemoComponent {
  masks = [
    { label: 'Phone Number', placeholder: '(___) ___-____', pattern: '(999) 999-9999' },
    { label: 'Date', placeholder: '__/__/____', pattern: '99/99/9999' },
    { label: 'SSN', placeholder: '___-__-____', pattern: '999-99-9999' },
    { label: 'ZIP Code', placeholder: '_____', pattern: '99999' },
    { label: 'Currency', placeholder: '$0.00', pattern: '$num.00' },
  ];
}

const meta: Meta<InputMaskDemoComponent> = {
  title: 'Forms/Input Mask',
  component: InputMaskDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Input Mask](https://angular.vristo.sbthemes.com/forms/input-mask)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<InputMaskDemoComponent>;
export const InputMasks: Story = {};
