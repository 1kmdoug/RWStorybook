import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-breadcrumbs-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Default Breadcrumbs</div>
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
        <li class="breadcrumb-separator">/</li>
        <li class="breadcrumb-item"><a href="javascript:void(0)">Components</a></li>
        <li class="breadcrumb-separator">/</li>
        <li class="breadcrumb-item active">Breadcrumbs</li>
      </ul>
      <br>
      <ul class="breadcrumb" style="margin-top: 1rem;">
        <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
        <li class="breadcrumb-separator">›</li>
        <li class="breadcrumb-item"><a href="javascript:void(0)">Reports</a></li>
        <li class="breadcrumb-separator">›</li>
        <li class="breadcrumb-item"><a href="javascript:void(0)">Q1 2026</a></li>
        <li class="breadcrumb-separator">›</li>
        <li class="breadcrumb-item active">Summary</li>
      </ul>
    </div>
  `,
})
class BreadcrumbsDemoComponent {}

const meta: Meta<BreadcrumbsDemoComponent> = {
  title: 'Elements/Breadcrumbs',
  component: BreadcrumbsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default\n**Reference:** [Vristo Breadcrumbs](https://angular.vristo.sbthemes.com/element/breadcrumbs)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<BreadcrumbsDemoComponent>;
export const DefaultBreadcrumbs: Story = {};
