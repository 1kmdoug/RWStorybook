import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-charts-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Charts — Full Library</div>
      <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.5rem;">
        All Vristo chart types are approved for use across ReportAll. Charts should follow the
        ReportAll color palette (primary green, semantic colors) rather than Vristo defaults.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
        <div *ngFor="let chart of chartTypes" class="card">
          <div class="card-body" style="text-align: center; padding: 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">{{ chart.icon }}</div>
            <p style="font-weight: 600; font-size: 0.8125rem; margin: 0;">{{ chart.name }}</p>
          </div>
        </div>
      </div>
      <p style="color: var(--gray-400); font-size: 0.8125rem; margin-top: 1rem;">
        See the full Vristo charts reference for implementation details and configuration options.
      </p>
    </div>
  `,
})
class ChartsDemoComponent {
  chartTypes = [
    { name: 'Line Chart', icon: '📈' },
    { name: 'Area Chart', icon: '📊' },
    { name: 'Bar Chart', icon: '📶' },
    { name: 'Pie / Donut', icon: '🍩' },
    { name: 'Radar Chart', icon: '🕸️' },
    { name: 'Scatter Plot', icon: '⚬' },
  ];
}

const meta: Meta<ChartsDemoComponent> = {
  title: 'Elements/Charts',
  component: ChartsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Charts](https://angular.vristo.sbthemes.com/charts)\n\nAll chart types are approved. Use ReportAll primary green and semantic colors.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ChartsDemoComponent>;
export const ChartLibrary: Story = {};
