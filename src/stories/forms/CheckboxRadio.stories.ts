import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-checkbox-radio-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Checkbox and Radio — Default</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 500px;">
        <div>
          <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Checkboxes</h4>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="c1" checked>
            <label for="c1">Checked option</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="c2">
            <label for="c2">Unchecked option</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="c3" disabled>
            <label for="c3" style="opacity: 0.5;">Disabled</label>
          </div>
        </div>
        <div>
          <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Radio Buttons</h4>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="r1" checked>
            <label for="r1">Option A</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="r2">
            <label for="r2">Option B</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="r3" disabled>
            <label for="r3" style="opacity: 0.5;">Disabled</label>
          </div>
        </div>
      </div>
    </div>
  `,
})
class CheckboxRadioDemoComponent {}

const meta: Meta<CheckboxRadioDemoComponent> = {
  title: 'Forms/Checkbox and Radio',
  component: CheckboxRadioDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default\n**Reference:** [Vristo Checkbox and Radio](https://angular.vristo.sbthemes.com/forms/checkbox-radio)\n\nDefault browser checkboxes and radios, tinted with the primary accent color.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CheckboxRadioDemoComponent>;
export const Default: Story = {};
