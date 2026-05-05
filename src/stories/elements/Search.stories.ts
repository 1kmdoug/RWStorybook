import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-search-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Search Box</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        Per @Sharon Dreyer: Use this search box specifically for the downloads table search.
      </p>
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input class="form-input" placeholder="Search downloads..." type="text">
      </div>

      <div style="margin-top: 2rem;">
        <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem;">In Context (Table Search)</h4>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3 style="font-size: 1rem; font-weight: 700; margin: 0;">Downloads</h3>
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input class="form-input" placeholder="Search..." type="text">
          </div>
        </div>
        <table class="table table-striped">
          <thead>
            <tr><th>Name</th><th>Type</th><th>Date</th><th>Size</th></tr>
          </thead>
          <tbody>
            <tr><td>Report_Q1.pdf</td><td>PDF</td><td>Mar 15, 2026</td><td>2.4 MB</td></tr>
            <tr><td>Parcel_Export.csv</td><td>CSV</td><td>Mar 12, 2026</td><td>856 KB</td></tr>
            <tr><td>County_Map.png</td><td>Image</td><td>Mar 10, 2026</td><td>5.1 MB</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
class SearchDemoComponent {}

const meta: Meta<SearchDemoComponent> = {
  title: 'Elements/Search',
  component: SearchDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Search Box\n**ReportAll Note:** Use for the downloads table search (per @Sharon Dreyer)\n**Reference:** [Vristo Search](https://angular.vristo.sbthemes.com/element/search)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SearchDemoComponent>;
export const SearchBox: Story = {};
