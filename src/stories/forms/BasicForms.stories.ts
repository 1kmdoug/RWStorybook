import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Forms/Basic Forms',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Basic Forms

Standard form inputs and controls.

**Approved:** Keep all basic form elements

**Reference:** [Vristo Forms Documentation](https://angular.vristo.sbthemes.com/forms/basic)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <form style="max-width: 600px;">
          <div class="mb-3">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name"
              style="width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; font-size: 1rem;"
            />
          </div>
          
          <div class="mb-3">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              style="width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; font-size: 1rem;"
            />
          </div>
          
          <div class="mb-3">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              style="width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; font-size: 1rem;"
            />
          </div>
          
          <div class="mb-3">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Message</label>
            <textarea 
              rows="4"
              placeholder="Enter your message"
              style="width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; font-size: 1rem; resize: vertical;"
            ></textarea>
          </div>
          
          <div class="mb-3">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Country</label>
            <select style="width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 0.375rem; font-size: 1rem;">
              <option>Select a country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>
          
          <div class="mb-3">
            <label style="display: flex; align-items: center; cursor: pointer;">
              <input type="checkbox" style="margin-right: 0.5rem;">
              <span>I agree to the terms and conditions</span>
            </label>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const BasicForm: Story = {};
