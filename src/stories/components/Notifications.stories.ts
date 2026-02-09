import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Notifications',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Notifications

Toast-style notifications for user feedback.

**Approved Variants:** 
- Basic
- Background Color

**Reference:** [Vristo Notifications Documentation](https://angular.vristo.sbthemes.com/components/notifications)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary">Show Notification</button>
        <div class="mt-4">
          <div style="max-width: 400px; background: white; border: 1px solid #dee2e6; border-left: 4px solid var(--primary-color); border-radius: 0.375rem; padding: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <strong style="color: var(--primary-color);">Success!</strong>
                <p style="margin: 0.5rem 0 0 0; color: #6c757d;">Your changes have been saved successfully.</p>
              </div>
              <button style="background: none; border: none; font-size: 1.25rem; color: #6c757d; cursor: pointer; padding: 0; margin-left: 1rem;">&times;</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const BackgroundColor: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary">Show Colored Notification</button>
        <div class="mt-4" style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
          <div style="background: var(--primary-color); color: white; border-radius: 0.375rem; padding: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <strong>Primary Notification</strong>
                <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">This is a primary colored notification.</p>
              </div>
              <button style="background: none; border: none; font-size: 1.25rem; color: white; cursor: pointer; padding: 0; margin-left: 1rem;">&times;</button>
            </div>
          </div>
          
          <div style="background: #28a745; color: white; border-radius: 0.375rem; padding: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <strong>Success Notification</strong>
                <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">Operation completed successfully!</p>
              </div>
              <button style="background: none; border: none; font-size: 1.25rem; color: white; cursor: pointer; padding: 0; margin-left: 1rem;">&times;</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
