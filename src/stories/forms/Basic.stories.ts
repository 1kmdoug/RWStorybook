import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-forms-basic-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Forms — Full Reference</div>

      <div style="max-width: 500px;">
        <div class="form-group">
          <label class="form-label">Text Input</label>
          <input class="form-input" type="text" placeholder="Enter text...">
        </div>

        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" type="email" placeholder="name&#64;example.com">
          <div class="form-help">We'll never share your email.</div>
        </div>

        <div class="form-group">
          <label class="form-label">Password</label>
          <input class="form-input" type="password" placeholder="••••••••">
        </div>

        <div class="form-group">
          <label class="form-label">Select</label>
          <select class="form-select">
            <option>Choose an option...</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Textarea</label>
          <textarea class="form-textarea" rows="3" placeholder="Enter your message..."></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Disabled Input</label>
          <input class="form-input" type="text" placeholder="Disabled" disabled style="opacity: 0.5; cursor: not-allowed;">
        </div>

        <div class="form-group">
          <label class="form-label">Read Only</label>
          <input class="form-input" type="text" value="Read-only value" readonly style="background: var(--gray-50);">
        </div>

        <div style="display: flex; gap: 0.5rem; margin-top: 1.5rem;">
          <button class="btn btn-primary">Submit</button>
          <button class="btn btn-outline-secondary">Cancel</button>
        </div>
      </div>
    </div>
  `,
})
class FormsBasicDemoComponent {}

const meta: Meta<FormsBasicDemoComponent> = {
  title: 'Forms/Basic',
  component: FormsBasicDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Basic Forms](https://angular.vristo.sbthemes.com/forms/basic)\n\nAll basic form elements are approved.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<FormsBasicDemoComponent>;
export const BasicForms: Story = {};
