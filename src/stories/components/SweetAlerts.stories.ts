import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Sweet Alerts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Sweet Alerts

Beautiful replacement for JavaScript's alert() popup.

**Approved Variants:** 
- Basic
- A title with text under
- Mixin

**Reference:** [Vristo Sweet Alerts Documentation](https://angular.vristo.sbthemes.com/components/sweetalert)
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
        <button class="btn btn-primary">Show Alert</button>
        <div class="mt-4 p-4" style="background: #f8f9fa; border-radius: 0.5rem;">
          <div style="max-width: 400px; margin: 0 auto; background: white; padding: 2rem; border-radius: 0.5rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <div style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;">✓</div>
            <h3 style="margin-bottom: 0.5rem;">Success!</h3>
            <p style="color: #6c757d;">Your operation completed successfully.</p>
            <button class="btn btn-primary mt-3">OK</button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const TitleWithText: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary">Show Alert with Title</button>
        <div class="mt-4 p-4" style="background: #f8f9fa; border-radius: 0.5rem;">
          <div style="max-width: 400px; margin: 0 auto; background: white; padding: 2rem; border-radius: 0.5rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Are you sure?</h2>
            <p style="color: #6c757d; margin-bottom: 2rem;">You won't be able to revert this action!</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <button class="btn" style="background-color: #6c757d; color: white;">Cancel</button>
              <button class="btn btn-primary">Yes, delete it!</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Mixin: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary">Show Mixin Alert</button>
        <div class="mt-4 p-4" style="background: #f8f9fa; border-radius: 0.5rem;">
          <div style="max-width: 400px; margin: 0 auto; background: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <div style="display: flex; align-items: flex-start; gap: 1rem;">
              <div style="font-size: 2rem; color: #ffc107;">⚠</div>
              <div style="flex: 1;">
                <h4 style="margin: 0 0 0.5rem 0;">Warning</h4>
                <p style="color: #6c757d; margin: 0;">This action requires confirmation.</p>
              </div>
            </div>
            <div style="margin-top: 1.5rem; text-align: right;">
              <button class="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
