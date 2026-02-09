import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Cards',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Cards

Container components for grouping related content.

**Use Cases:**
- Content grouping
- Information display
- Dashboard widgets
- List items

**Approved Variants:** Card 1 and Card 4

**Reference:** [Vristo Cards Documentation](https://angular.vristo.sbthemes.com/components/cards)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Card1: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <div class="card" style="max-width: 400px;">
          <div class="card-header">
            Card Title
          </div>
          <div class="card-body">
            <p>This is a basic card with a header and body. Use it for simple content grouping.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    `,
  }),
};

export const Card4: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <div class="card" style="max-width: 400px;">
          <div class="card-body">
            <h5 style="margin-top: 0; color: var(--primary-color);">Card with Action</h5>
            <p style="color: #6c757d; margin-bottom: 1.5rem;">
              This card variant includes action buttons in the footer.
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Action</button>
            <button class="btn" style="background-color: #6c757d; color: white; margin-left: 0.5rem;">Cancel</button>
          </div>
        </div>
      </div>
    `,
  }),
};
