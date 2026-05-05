import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-datepicker-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Date and Range Picker</div>
      <div style="max-width: 400px;">
        <div class="form-group">
          <label class="form-label">Basic Date Picker</label>
          <div style="position: relative;">
            <input class="form-input" type="date" value="2026-05-05">
          </div>
          <div class="form-help">Standard date input — the primary pattern.</div>
        </div>

        <div class="form-group">
          <label class="form-label">Top-Left Slider (Date Range)</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <input class="form-input" type="date" value="2026-04-01" style="flex: 1;">
            <span style="color: var(--gray-400); font-size: 0.875rem;">to</span>
            <input class="form-input" type="date" value="2026-05-05" style="flex: 1;">
          </div>
          <div class="form-help">Date range with top-left slider positioning.</div>
        </div>
      </div>
    </div>
  `,
})
class DatePickerDemoComponent {}

const meta: Meta<DatePickerDemoComponent> = {
  title: 'Forms/Date and Range Picker',
  component: DatePickerDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic/Date, Top-Left Slider\n**Reference:** [Vristo Date and Range Picker](https://angular.vristo.sbthemes.com/forms/date-picker)\n\nTwo approved variants: a single date picker and a range picker with top-left slider.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<DatePickerDemoComponent>;
export const DateAndRangePicker: Story = {};
