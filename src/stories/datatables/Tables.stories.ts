import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-tables-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Tables</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ReportAll override: Default table style is <strong>striped</strong> (not plain).
        Also supports hover, captions, dropdowns, and checkboxes.
      </p>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">Striped + Hover (Default)</h4>
      <table class="table table-striped table-hover" style="margin-bottom: 2rem;">
        <caption style="caption-side: bottom; text-align: left; font-size: 0.8125rem; color: var(--gray-400); padding: 0.5rem 1rem;">
          Showing 3 of 128 records
        </caption>
        <thead>
          <tr>
            <th style="width: 40px;"><input type="checkbox"></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th style="width: 50px;"></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows">
            <td><input type="checkbox"></td>
            <td style="font-weight: 600;">{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.role }}</td>
            <td>
              <span class="badge" [class]="'badge-' + row.statusColor">{{ row.status }}</span>
            </td>
            <td>
              <button style="background: none; border: none; cursor: pointer; font-size: 1rem; color: var(--gray-400);">⋮</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">With Caption</h4>
      <table class="table table-striped" style="margin-bottom: 2rem;">
        <caption style="caption-side: top; text-align: left; font-size: 0.875rem; font-weight: 600; color: var(--gray-700); padding: 0.75rem 1rem;">
          Quarterly Revenue Summary
        </caption>
        <thead>
          <tr><th>Quarter</th><th>Revenue</th><th>Growth</th></tr>
        </thead>
        <tbody>
          <tr><td>Q1 2026</td><td>$1.2M</td><td style="color: var(--success);">+12%</td></tr>
          <tr><td>Q4 2025</td><td>$1.07M</td><td style="color: var(--success);">+8%</td></tr>
          <tr><td>Q3 2025</td><td>$990K</td><td style="color: var(--danger);">-2%</td></tr>
        </tbody>
      </table>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">With Row Dropdown Actions</h4>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 0.75rem;">
        The ⋮ menu in the last column opens a dropdown (see Elements/Dropdown) for row-level actions like Edit, Delete, etc.
      </p>
    </div>
  `,
})
class TablesDemoComponent {
  rows = [
    { name: 'Jane Cooper', email: 'jane&#64;reportall.com', role: 'Admin', status: 'Active', statusColor: 'success' },
    { name: 'Wade Warren', email: 'wade&#64;reportall.com', role: 'Editor', status: 'Active', statusColor: 'success' },
    { name: 'Esther Howard', email: 'esther&#64;reportall.com', role: 'Viewer', status: 'Inactive', statusColor: 'secondary' },
  ];
}

const meta: Meta<TablesDemoComponent> = {
  title: 'Datatables/Tables',
  component: TablesDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Hover, Captions, Dropdowns, Checkboxes, Striped\n**ReportAll Override:** Changed default to striped\n**Reference:** [Vristo Tables](https://angular.vristo.sbthemes.com/tables)\n\nMultiple table features approved. Default is striped with hover.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<TablesDemoComponent>;
export const Tables: Story = {};
