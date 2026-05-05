import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-forms-validation-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Validation</div>
      <div style="max-width: 500px;">
        <div class="form-group">
          <label class="form-label">Valid Input</label>
          <input class="form-input is-valid" type="text" value="john.doe&#64;example.com">
          <div class="form-help" style="color: var(--success);">Looks good!</div>
        </div>

        <div class="form-group">
          <label class="form-label">Invalid Input</label>
          <input class="form-input is-invalid" type="text" value="not-an-email">
          <div class="form-error">Please enter a valid email address.</div>
        </div>

        <div class="form-group">
          <label class="form-label">Required Field (empty)</label>
          <input class="form-input is-invalid" type="text" placeholder="This field is required">
          <div class="form-error">This field cannot be left blank.</div>
        </div>

        <div class="form-group">
          <label class="form-label">Valid Select</label>
          <select class="form-select is-valid">
            <option>Option 1</option>
          </select>
        </div>
      </div>
    </div>
  `,
})
class FormsValidationDemoComponent {}

const meta: Meta<FormsValidationDemoComponent> = {
  title: 'Forms/Validation',
  component: FormsValidationDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic\n**Reference:** [Vristo Validation](https://angular.vristo.sbthemes.com/forms/validation)\n\nValid fields get a green border, invalid fields get a red border with error text below.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<FormsValidationDemoComponent>;
export const BasicValidation: Story = {};
