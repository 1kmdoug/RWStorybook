import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-timeline-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Timeline</div>
      <p style="color: var(--warning); font-size: 0.8125rem; font-weight: 600; margin-bottom: 1.5rem;">
        ⚠️ Don't use unless explicitly asked for in designs.
      </p>
      <div style="position: relative; padding-left: 2rem;">
        <div style="position: absolute; left: 0.5rem; top: 0; bottom: 0; width: 2px; background: var(--gray-200);"></div>
        <div *ngFor="let event of events" style="position: relative; margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <div style="position: absolute; left: -1.65rem; top: 0.25rem; width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--primary); background: var(--white);"></div>
          <div>
            <p style="font-weight: 600; font-size: 0.875rem; margin: 0;">{{ event.title }}</p>
            <p style="font-size: 0.8125rem; color: var(--gray-500); margin: 0.25rem 0 0;">{{ event.description }}</p>
            <span style="font-size: 0.75rem; color: var(--gray-400);">{{ event.date }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
class TimelineDemoComponent {
  events = [
    { title: 'Project Created', description: 'Initial setup and scaffolding complete.', date: 'Jan 15, 2026' },
    { title: 'Design Approved', description: 'Stakeholder sign-off on mockups.', date: 'Feb 3, 2026' },
    { title: 'Development Sprint', description: 'Core features implemented.', date: 'Mar 10, 2026' },
  ];
}

const meta: Meta<TimelineDemoComponent> = {
  title: 'Components/Timeline',
  component: TimelineDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic  
**ReportAll Note:** Don't use unless explicitly requested  
**Reference:** [Vristo Timeline](https://angular.vristo.sbthemes.com/component/timeline)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<TimelineDemoComponent>;
export const BasicTimeline: Story = {};
