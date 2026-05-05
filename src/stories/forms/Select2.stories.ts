import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-select2-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Select2 — Full Reference</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        All Select2 variants are approved. In production, these use the ng-select or Select2 library
        for searchable dropdowns, multi-select, and tagging.
      </p>
      <div style="max-width: 400px;">
        <div class="form-group">
          <label class="form-label">Basic Select2</label>
          <select class="form-select">
            <option>Search or select...</option>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Ohio</option>
          </select>
          <div class="form-help">Searchable dropdown with typeahead</div>
        </div>

        <div class="form-group">
          <label class="form-label">Multi-Select</label>
          <div style="border: 1px solid var(--gray-300); border-radius: var(--radius-md); padding: 0.375rem; display: flex; flex-wrap: wrap; gap: 0.25rem; min-height: 38px;">
            <span *ngFor="let tag of selectedTags" style="display: inline-flex; align-items: center; gap: 0.25rem; background: var(--ra-green-50); color: var(--primary); padding: 0.125rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.8125rem;">
              {{ tag }}
              <span style="cursor: pointer; opacity: 0.6;">×</span>
            </span>
          </div>
          <div class="form-help">Select multiple items with tag-style chips</div>
        </div>

        <div class="form-group">
          <label class="form-label">Tagging</label>
          <div style="border: 1px solid var(--gray-300); border-radius: var(--radius-md); padding: 0.375rem; display: flex; flex-wrap: wrap; gap: 0.25rem; min-height: 38px;">
            <span style="display: inline-flex; align-items: center; gap: 0.25rem; background: var(--gray-100); padding: 0.125rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.8125rem;">
              custom-tag <span style="cursor: pointer; opacity: 0.6;">×</span>
            </span>
          </div>
          <div class="form-help">Users can create new tags by typing</div>
        </div>
      </div>
    </div>
  `,
})
class Select2DemoComponent {
  selectedTags = ['Ohio', 'Michigan', 'Indiana'];
}

const meta: Meta<Select2DemoComponent> = {
  title: 'Forms/Select2',
  component: Select2DemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Select2](https://angular.vristo.sbthemes.com/forms/select2)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<Select2DemoComponent>;
export const Select2: Story = {};
