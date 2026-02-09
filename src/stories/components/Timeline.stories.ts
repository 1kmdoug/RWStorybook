import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Timeline',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Basic Timeline

Vertical timeline for displaying chronological events.

**Approved Variant:** Basic Timeline

**Reference:** [Vristo Timeline Documentation](https://angular.vristo.sbthemes.com/components/timeline)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div style="position: relative; padding-left: 2rem;">
          <div style="position: absolute; left: 9px; top: 0; bottom: 0; width: 2px; background: #dee2e6;"></div>
          
          <div style="position: relative; margin-bottom: 2rem;">
            <div style="position: absolute; left: -2rem; width: 20px; height: 20px; border-radius: 50%; background: var(--primary-color); border: 3px solid white; box-shadow: 0 0 0 2px var(--primary-color);"></div>
            <div class="card">
              <div class="card-body">
                <h5 style="margin-top: 0; color: var(--primary-color);">Project Started</h5>
                <p style="color: #6c757d; font-size: 0.875rem; margin-bottom: 0.5rem;">January 15, 2026</p>
                <p>Initial project kickoff and requirement gathering completed.</p>
              </div>
            </div>
          </div>
          
          <div style="position: relative; margin-bottom: 2rem;">
            <div style="position: absolute; left: -2rem; width: 20px; height: 20px; border-radius: 50%; background: var(--primary-color); border: 3px solid white; box-shadow: 0 0 0 2px var(--primary-color);"></div>
            <div class="card">
              <div class="card-body">
                <h5 style="margin-top: 0; color: var(--primary-color);">Design Phase</h5>
                <p style="color: #6c757d; font-size: 0.875rem; margin-bottom: 0.5rem;">January 30, 2026</p>
                <p>UI/UX designs approved and ready for development.</p>
              </div>
            </div>
          </div>
          
          <div style="position: relative;">
            <div style="position: absolute; left: -2rem; width: 20px; height: 20px; border-radius: 50%; background: #dee2e6; border: 3px solid white;"></div>
            <div class="card">
              <div class="card-body">
                <h5 style="margin-top: 0;">Development</h5>
                <p style="color: #6c757d; font-size: 0.875rem; margin-bottom: 0.5rem;">In Progress</p>
                <p>Frontend and backend development underway.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const BasicTimeline: Story = {};
