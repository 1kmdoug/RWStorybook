import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-tooltips-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Default Tooltips</div>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 3rem 1rem;">
        <div class="tooltip-demo">
          <button class="btn btn-outline-primary">Hover me (top)</button>
          <div class="tooltip-box">Tooltip on top</div>
        </div>
        <div class="tooltip-demo">
          <button class="btn btn-outline-success">Hover me</button>
          <div class="tooltip-box" style="bottom: auto; top: calc(100% + 8px);">
            Tooltip on bottom
            <span style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-bottom-color: var(--dark);"></span>
          </div>
        </div>
      </div>
      <p style="font-size: 0.8125rem; color: var(--gray-500);">
        Tooltips display on hover. Production implementation uses Angular directives with configurable placement.
      </p>
    </div>
  `,
})
class TooltipsDemoComponent {}

const meta: Meta<TooltipsDemoComponent> = {
  title: 'Elements/Tooltips',
  component: TooltipsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default\n**Reference:** [Vristo Tooltips](https://angular.vristo.sbthemes.com/element/tooltips)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<TooltipsDemoComponent>;
export const DefaultTooltips: Story = {};
