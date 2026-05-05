import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-dropdown-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Dropdown</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ReportAll override: No drop shadow on dropdown menus.
      </p>
      <div class="dropdown" style="margin-bottom: 12rem;">
        <button class="btn btn-primary" (click)="open = !open">
          Dropdown ▾
        </button>
        <div class="dropdown-menu" *ngIf="open" style="display: block;">
          <a class="dropdown-item" href="javascript:void(0)">Action</a>
          <a class="dropdown-item" href="javascript:void(0)">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="javascript:void(0)">Separated link</a>
        </div>
      </div>
    </div>
  `,
})
class DropdownDemoComponent {
  open = true;
}

const meta: Meta<DropdownDemoComponent> = {
  title: 'Elements/Dropdown',
  component: DropdownDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic\n**ReportAll Override:** No drop shadow\n**Reference:** [Vristo Dropdown](https://angular.vristo.sbthemes.com/element/dropdown)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<DropdownDemoComponent>;
export const BasicDropdown: Story = {};
