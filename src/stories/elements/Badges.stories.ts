import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Badges',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Outline Badges

Small count and labeling components.

**Approved Variant:** Outline Badges

**Reference:** [Vristo Badges Documentation](https://angular.vristo.sbthemes.com/elements/badges)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <span class="badge badge-primary badge-outline">Primary</span>
          <span class="badge badge-outline" style="color: #28a745; border-color: #28a745;">Success</span>
          <span class="badge badge-outline" style="color: #dc3545; border-color: #dc3545;">Danger</span>
          <span class="badge badge-outline" style="color: #ffc107; border-color: #ffc107;">Warning</span>
          <span class="badge badge-outline" style="color: #17a2b8; border-color: #17a2b8;">Info</span>
          <span class="badge badge-outline" style="color: #6c757d; border-color: #6c757d;">Secondary</span>
        </div>
        
        <div class="mt-4">
          <h5>With Counts:</h5>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
            <span>Notifications <span class="badge badge-primary badge-outline" style="margin-left: 0.5rem;">12</span></span>
            <span>Messages <span class="badge badge-primary badge-outline" style="margin-left: 0.5rem;">5</span></span>
            <span>Alerts <span class="badge badge-outline" style="margin-left: 0.5rem; color: #dc3545; border-color: #dc3545;">3</span></span>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const OutlineBadges: Story = {};
