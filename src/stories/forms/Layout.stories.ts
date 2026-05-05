import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-forms-layout-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Forms Grid Layout</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 600px;">
        <div class="form-group">
          <label class="form-label">First Name</label>
          <input class="form-input" type="text" placeholder="John">
        </div>
        <div class="form-group">
          <label class="form-label">Last Name</label>
          <input class="form-input" type="text" placeholder="Doe">
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label">Email</label>
          <input class="form-input" type="email" placeholder="john.doe&#64;example.com">
        </div>
        <div class="form-group" style="grid-column: 1 / -1;">
          <label class="form-label">Address</label>
          <input class="form-input" type="text" placeholder="1234 Main St">
        </div>
        <div class="form-group">
          <label class="form-label">City</label>
          <input class="form-input" type="text" placeholder="Columbus">
        </div>
        <div class="form-group">
          <label class="form-label">State</label>
          <select class="form-select">
            <option>Choose...</option>
            <option>Ohio</option>
            <option>Michigan</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Zip Code</label>
          <input class="form-input" type="text" placeholder="44256">
        </div>
      </div>
      <div style="margin-top: 1rem;">
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  `,
})
class FormsLayoutDemoComponent {}

const meta: Meta<FormsLayoutDemoComponent> = {
  title: 'Forms/Layout',
  component: FormsLayoutDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Forms Grid\n**Reference:** [Vristo Forms Layout](https://angular.vristo.sbthemes.com/forms/layouts)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<FormsLayoutDemoComponent>;
export const FormsGrid: Story = {};
