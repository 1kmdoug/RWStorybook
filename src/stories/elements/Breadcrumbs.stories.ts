import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Default Breadcrumbs

Navigation showing current page location.

**Approved Variant:** Default

**Reference:** [Vristo Breadcrumbs Documentation](https://angular.vristo.sbthemes.com/elements/breadcrumbs)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <nav>
          <ol style="display: flex; list-style: none; padding: 0; margin: 0; flex-wrap: wrap;">
            <li style="display: flex; align-items: center;">
              <a href="javascript:void(0)" style="color: var(--primary-color); text-decoration: none;">Home</a>
              <span style="margin: 0 0.5rem; color: #6c757d;">/</span>
            </li>
            <li style="display: flex; align-items: center;">
              <a href="javascript:void(0)" style="color: var(--primary-color); text-decoration: none;">Components</a>
              <span style="margin: 0 0.5rem; color: #6c757d;">/</span>
            </li>
            <li style="color: #6c757d;">
              Breadcrumbs
            </li>
          </ol>
        </nav>
        
        <div class="mt-4">
          <h5 class="mb-2">Another Example:</h5>
          <nav>
            <ol style="display: flex; list-style: none; padding: 0; margin: 0; flex-wrap: wrap;">
              <li style="display: flex; align-items: center;">
                <a href="javascript:void(0)" style="color: var(--primary-color); text-decoration: none;">Dashboard</a>
                <span style="margin: 0 0.5rem; color: #6c757d;">›</span>
              </li>
              <li style="display: flex; align-items: center;">
                <a href="javascript:void(0)" style="color: var(--primary-color); text-decoration: none;">Settings</a>
                <span style="margin: 0 0.5rem; color: #6c757d;">›</span>
              </li>
              <li style="display: flex; align-items: center;">
                <a href="javascript:void(0)" style="color: var(--primary-color); text-decoration: none;">User Profile</a>
                <span style="margin: 0 0.5rem; color: #6c757d;">›</span>
              </li>
              <li style="color: #6c757d;">
                Edit
              </li>
            </ol>
          </nav>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const DefaultBreadcrumbs: Story = {};
