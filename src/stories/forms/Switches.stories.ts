import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-switches-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Switches — Rounded (Solid Background)</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ReportAll uses the rounded variant with a solid background color (not outlined or square).
      </p>
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
        <div *ngFor="let s of switches" style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.875rem; color: var(--gray-700);">{{ s.label }}</span>
          <label class="form-switch">
            <input type="checkbox" [checked]="s.checked" [disabled]="s.disabled">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  `,
})
class SwitchesDemoComponent {
  switches = [
    { label: 'Notifications', checked: true, disabled: false },
    { label: 'Dark Mode', checked: false, disabled: false },
    { label: 'Auto-Save', checked: true, disabled: false },
    { label: 'Disabled Toggle', checked: false, disabled: true },
  ];
}

const meta: Meta<SwitchesDemoComponent> = {
  title: 'Forms/Switches',
  component: SwitchesDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Rounded (solid background color)\n**Reference:** [Vristo Switches](https://angular.vristo.sbthemes.com/forms/switches)\n\nRounded pill switch with solid fill when active. Not the outline or square variants.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SwitchesDemoComponent>;
export const RoundedSolid: Story = {};
