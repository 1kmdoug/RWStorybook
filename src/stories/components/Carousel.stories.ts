import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Basic Carousel

Image and content slider component.

**Approved Variant:** Basic Carousel

**Reference:** [Vristo Carousel Documentation](https://angular.vristo.sbthemes.com/components/carousel)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div style="max-width: 600px; position: relative; background: #f8f9fa; border-radius: 0.5rem; overflow: hidden;">
          <div style="padding: 8rem 2rem; text-align: center; background: linear-gradient(135deg, #285D4D 0%, #3a7462 100%); color: white;">
            <h2>Slide 1</h2>
            <p>Carousel content goes here</p>
          </div>
          <div style="position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: white;"></div>
            <div style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.5);"></div>
            <div style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.5);"></div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const BasicCarousel: Story = {};
