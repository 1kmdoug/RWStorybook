import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Tables/Basic Tables',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Tables

Data tables for displaying structured information.

**Approved Variants:**
- Hover
- Captions
- Dropdown
- Checkboxes

**Reference:** [Vristo Tables Documentation](https://angular.vristo.sbthemes.com/tables)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const HoverTable: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <table style="width: 100%; border-collapse: collapse; background: white;">
          <thead style="background-color: var(--light-color);">
            <tr>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Name</th>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Position</th>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Office</th>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr style="transition: background-color 0.2s;">
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Tiger Nixon</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">System Architect</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Edinburgh</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">$320,800</td>
            </tr>
            <tr style="transition: background-color 0.2s;">
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Garrett Winters</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Accountant</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Tokyo</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">$170,750</td>
            </tr>
            <tr style="transition: background-color 0.2s;">
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Ashton Cox</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Junior Technical Author</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">San Francisco</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">$86,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};

export const TableWithCheckboxes: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <table style="width: 100%; border-collapse: collapse; background: white;">
          <thead style="background-color: var(--light-color);">
            <tr>
              <th style="padding: 1rem; width: 40px; border-bottom: 2px solid #dee2e6;">
                <input type="checkbox" style="cursor: pointer;">
              </th>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Task</th>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Status</th>
              <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #dee2e6;">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">
                <input type="checkbox" style="cursor: pointer;">
              </td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Complete project documentation</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">
                <span class="badge badge-primary badge-outline">In Progress</span>
              </td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Feb 15, 2026</td>
            </tr>
            <tr>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">
                <input type="checkbox" checked style="cursor: pointer;">
              </td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Review pull requests</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">
                <span class="badge badge-outline" style="color: #28a745; border-color: #28a745;">Complete</span>
              </td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Feb 10, 2026</td>
            </tr>
            <tr>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">
                <input type="checkbox" style="cursor: pointer;">
              </td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Update dependencies</td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">
                <span class="badge badge-outline" style="color: #6c757d; border-color: #6c757d;">Pending</span>
              </td>
              <td style="padding: 1rem; border-bottom: 1px solid #dee2e6;">Feb 20, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};
