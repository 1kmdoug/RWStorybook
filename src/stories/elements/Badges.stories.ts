import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-badges-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Badges — Basic and Outline</div>
      <p style="color: var(--danger); font-size: 0.8125rem; font-weight: 600; margin-bottom: 1.5rem;">
        ⚠️ Guidance needed: When to use Basic vs. Outline. See @Doug McLaughlin.
      </p>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Basic (Solid)</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-info">Info</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-danger">Danger</span>
        <span class="badge badge-dark">Dark</span>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Outline</h4>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="badge badge-outline-primary">Primary</span>
        <span class="badge badge-outline-success">Success</span>
        <span class="badge badge-outline-info">Info</span>
        <span class="badge badge-outline-warning">Warning</span>
        <span class="badge badge-outline-danger">Danger</span>
        <span class="badge badge-outline-dark">Dark</span>
      </div>
    </div>
  `,
})
class BadgesDemoComponent {}

const meta: Meta<BadgesDemoComponent> = {
  title: 'Elements/Badges',
  component: BadgesDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic and Outline\n**ReportAll Note:** Need guidance on when to use each. Basic was added.\n**Reference:** [Vristo Badges](https://angular.vristo.sbthemes.com/element/badges)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<BadgesDemoComponent>;
export const BasicAndOutline: Story = {};
