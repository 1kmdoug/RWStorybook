import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-list-group-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Basic List Group</div>
      <ul class="list-group" style="max-width: 400px;">
        <li class="list-group-item active">Active Item</li>
        <li class="list-group-item">Second Item</li>
        <li class="list-group-item">Third Item</li>
        <li class="list-group-item">Fourth Item</li>
        <li class="list-group-item" style="opacity: 0.5;">Disabled Item</li>
      </ul>
    </div>
  `,
})
class ListGroupDemoComponent {}

const meta: Meta<ListGroupDemoComponent> = {
  title: 'Components/List Group',
  component: ListGroupDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic  
**Reference:** [Vristo List Group](https://angular.vristo.sbthemes.com/component/list-group)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ListGroupDemoComponent>;
export const BasicListGroup: Story = {};
