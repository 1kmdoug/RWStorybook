import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-btn-groups-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Button Groups</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ReportAll override: Drop shadow removed. Horizontal and Input group variants.
      </p>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Horizontal</h4>
      <div class="btn-group" style="margin-bottom: 1.5rem;">
        <button class="btn btn-primary">Left</button>
        <button class="btn btn-primary">Middle</button>
        <button class="btn btn-primary">Right</button>
      </div>
      <br>
      <div class="btn-group" style="margin-bottom: 2rem;">
        <button class="btn btn-outline-primary">Active</button>
        <button class="btn btn-outline-primary">Link</button>
        <button class="btn btn-outline-primary">Link</button>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Input Group</h4>
      <div style="display: flex; max-width: 400px;">
        <span style="display: flex; align-items: center; padding: 0 0.75rem; background: var(--gray-100); border: 1px solid var(--gray-300); border-right: none; border-radius: var(--radius-md) 0 0 var(--radius-md); font-size: 0.875rem; color: var(--gray-500);">@</span>
        <input class="form-input" style="border-radius: 0 var(--radius-md) var(--radius-md) 0;" placeholder="Username">
      </div>
    </div>
  `,
})
class ButtonGroupsDemoComponent {}

const meta: Meta<ButtonGroupsDemoComponent> = {
  title: 'Elements/Button Groups',
  component: ButtonGroupsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Horizontal and Input Group\n**ReportAll Override:** Drop shadow removed\n**Reference:** [Vristo Button Groups](https://angular.vristo.sbthemes.com/element/buttons-group)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ButtonGroupsDemoComponent>;
export const ButtonGroups: Story = {};
