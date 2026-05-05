import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-order-sorting-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Order Sorting Datatable</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        Sortable datatable with click-to-sort column headers, search, and pagination.
        References: <a href="https://angular.vristo.sbthemes.com/datatables/order-sorting" target="_blank" style="color: var(--primary);">Vristo Order Sorting</a>
      </p>

      <!-- Toolbar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8125rem; color: var(--gray-500);">Show</span>
          <select class="form-select" style="width: auto; padding: 0.25rem 0.5rem; font-size: 0.8125rem;">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span style="font-size: 0.8125rem; color: var(--gray-500);">entries</span>
        </div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input class="form-input" type="text" placeholder="Search..." style="width: 200px;">
        </div>
      </div>

      <!-- Sortable Table -->
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th *ngFor="let col of columns" style="cursor: pointer; user-select: none;"
                (click)="sortBy(col.key)">
              {{ col.label }}
              <span style="font-size: 0.625rem; margin-left: 0.25rem; color: var(--gray-400);">
                {{ sortKey === col.key ? (sortDir === 'asc' ? '▲' : '▼') : '⇅' }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of sortedData">
            <td>{{ row.id }}</td>
            <td style="font-weight: 600;">{{ row.name }}</td>
            <td>{{ row.category }}</td>
            <td>{{ row.date }}</td>
            <td>
              <span class="badge" [class]="row.status === 'Complete' ? 'badge-success' : row.status === 'Pending' ? 'badge-warning' : 'badge-secondary'">
                {{ row.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
        <span style="font-size: 0.8125rem; color: var(--gray-500);">Showing 1 to 5 of 24 entries</span>
        <ul class="pagination">
          <li class="page-item disabled"><a class="page-link" href="javascript:void(0)">‹</a></li>
          <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
          <li class="page-item"><a class="page-link" href="javascript:void(0)">›</a></li>
        </ul>
      </div>
    </div>
  `,
})
class OrderSortingDemoComponent {
  sortKey = 'id';
  sortDir: 'asc' | 'desc' = 'asc';
  columns = [
    { key: 'id', label: '#' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
  ];
  data = [
    { id: 1, name: 'Summit County Parcels', category: 'Export', date: 'Apr 28, 2026', status: 'Complete' },
    { id: 2, name: 'Cuyahoga Tax Records', category: 'Report', date: 'Apr 25, 2026', status: 'Complete' },
    { id: 3, name: 'Medina Zoning Review', category: 'Analysis', date: 'Apr 22, 2026', status: 'Pending' },
    { id: 4, name: 'Portage Owner Lookup', category: 'Export', date: 'Apr 20, 2026', status: 'Draft' },
    { id: 5, name: 'Stark Flood Zone Map', category: 'Report', date: 'Apr 18, 2026', status: 'Complete' },
  ];

  get sortedData() {
    return [...this.data].sort((a: any, b: any) => {
      const valA = a[this.sortKey];
      const valB = b[this.sortKey];
      const cmp = typeof valA === 'number' ? valA - valB : String(valA).localeCompare(String(valB));
      return this.sortDir === 'asc' ? cmp : -cmp;
    });
  }

  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDir = 'asc';
    }
  }
}

const meta: Meta<OrderSortingDemoComponent> = {
  title: 'Datatables/Order Sorting',
  component: OrderSortingDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Order Sorting\n**Reference:** [Vristo Order Sorting](https://angular.vristo.sbthemes.com/datatables/order-sorting)\n\nFull-featured datatable with sortable columns, search, entries-per-page control, and pagination.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<OrderSortingDemoComponent>;
export const OrderSorting: Story = {};
