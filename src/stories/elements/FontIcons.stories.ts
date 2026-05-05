import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-fonticons-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Font Icons — Full Library</div>
      <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.5rem;">
        All Vristo icon sets are approved. The full icon catalog is available on the Vristo reference page.
      </p>
      <p style="color: var(--gray-500); font-size: 0.8125rem;">
        See <a href="https://angular.vristo.sbthemes.com/font-icons" target="_blank" style="color: var(--primary);">Vristo Font Icons</a>
        for the searchable icon catalog with copy-to-clipboard class names.
      </p>
    </div>
  `,
})
class FontIconsDemoComponent {}

const meta: Meta<FontIconsDemoComponent> = {
  title: 'Elements/Font Icons',
  component: FontIconsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Font Icons](https://angular.vristo.sbthemes.com/font-icons)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<FontIconsDemoComponent>;
export const IconLibrary: Story = {};
