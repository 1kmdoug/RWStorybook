import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-buttons-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Default Buttons</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ReportAll override: Drop shadows removed from all buttons.
      </p>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Solid</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-dark">Dark</button>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Outline</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <button class="btn btn-outline-primary">Primary</button>
        <button class="btn btn-outline-success">Success</button>
        <button class="btn btn-outline-info">Info</button>
        <button class="btn btn-outline-warning">Warning</button>
        <button class="btn btn-outline-danger">Danger</button>
        <button class="btn btn-outline-secondary">Secondary</button>
        <button class="btn btn-outline-dark">Dark</button>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Sizes</h4>
      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary">Default</button>
        <button class="btn btn-primary btn-lg">Large</button>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">States</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-primary">Normal</button>
        <button class="btn btn-primary" disabled>Disabled</button>
      </div>
    </div>
  `,
})
class ButtonsDemoComponent {}

const meta: Meta<ButtonsDemoComponent> = {
  title: 'Elements/Buttons',
  component: ButtonsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default\n**ReportAll Override:** Drop shadow removed\n**Reference:** [Vristo Buttons](https://angular.vristo.sbthemes.com/element/buttons)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ButtonsDemoComponent>;
export const DefaultButtons: Story = {};
