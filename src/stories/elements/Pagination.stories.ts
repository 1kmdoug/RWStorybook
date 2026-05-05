import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-pagination-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Default Pagination</div>
      <ul class="pagination">
        <li class="page-item disabled"><a class="page-link" href="javascript:void(0)">‹</a></li>
        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0)">5</a></li>
        <li class="page-item"><a class="page-link" href="javascript:void(0)">›</a></li>
      </ul>
    </div>
  `,
})
class PaginationDemoComponent {}

const meta: Meta<PaginationDemoComponent> = {
  title: 'Elements/Pagination',
  component: PaginationDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default\n**Reference:** [Vristo Pagination](https://angular.vristo.sbthemes.com/element/pagination)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<PaginationDemoComponent>;
export const DefaultPagination: Story = {};
