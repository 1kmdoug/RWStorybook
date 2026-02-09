import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Default Pagination

Navigate through pages of content.

**Approved Variant:** Default

**Reference:** [Vristo Pagination Documentation](https://angular.vristo.sbthemes.com/elements/pagination)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <nav>
          <ul style="display: flex; list-style: none; padding: 0; margin: 0; gap: 0.25rem;">
            <li>
              <a href="javascript:void(0)" style="display: block; padding: 0.5rem 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; color: #6c757d; text-decoration: none;">
                Previous
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" style="display: block; padding: 0.5rem 0.75rem; border: 1px solid var(--primary-color); background-color: var(--primary-color); border-radius: 0.375rem; color: white; text-decoration: none;">
                1
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" style="display: block; padding: 0.5rem 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; color: #6c757d; text-decoration: none; transition: all 0.2s;">
                2
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" style="display: block; padding: 0.5rem 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; color: #6c757d; text-decoration: none;">
                3
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" style="display: block; padding: 0.5rem 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; color: #6c757d; text-decoration: none;">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const DefaultPagination: Story = {};
