import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-loader-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Loaders with Buttons</div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary loader-btn" disabled>
          <span class="spinner"></span> Loading...
        </button>
        <button class="btn btn-success loader-btn" disabled>
          <span class="spinner"></span> Saving...
        </button>
        <button class="btn btn-info loader-btn" disabled>
          <span class="spinner"></span> Processing...
        </button>
        <button class="btn btn-outline-primary" disabled>
          <span class="spinner" style="border-color: rgba(46,125,50,0.3); border-top-color: var(--primary);"></span> Loading...
        </button>
      </div>
    </div>
  `,
})
class LoaderDemoComponent {}

const meta: Meta<LoaderDemoComponent> = {
  title: 'Elements/Loader',
  component: LoaderDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Loaders with Buttons\n**Reference:** [Vristo Loader](https://angular.vristo.sbthemes.com/element/loader)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<LoaderDemoComponent>;
export const LoaderWithButtons: Story = {};
