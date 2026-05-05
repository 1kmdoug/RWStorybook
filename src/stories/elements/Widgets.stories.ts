import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-widgets-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Widgets — Full Library</div>
      <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.5rem;">
        All Vristo widget patterns are approved for use. Widgets are pre-composed UI blocks
        that combine multiple elements (cards, charts, stats, lists) into dashboard-ready components.
      </p>
      <p style="color: var(--gray-500); font-size: 0.8125rem;">
        Refer to the <a href="https://angular.vristo.sbthemes.com/widgets" target="_blank" style="color: var(--primary);">Vristo Widgets page</a>
        for the complete catalog and implementation patterns.
      </p>
    </div>
  `,
})
class WidgetsDemoComponent {}

const meta: Meta<WidgetsDemoComponent> = {
  title: 'Elements/Widgets',
  component: WidgetsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Widgets](https://angular.vristo.sbthemes.com/widgets)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<WidgetsDemoComponent>;
export const WidgetLibrary: Story = {};
