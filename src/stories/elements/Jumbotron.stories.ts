import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-jumbotron-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Jumbotron</div>
      <p style="color: var(--warning); font-size: 0.8125rem; font-weight: 600; margin-bottom: 1.5rem;">
        ⚠️ This component was changed and needs to be brought back. Implementation may differ from this mockup.
      </p>
      <div style="background: var(--gray-50); border-radius: var(--radius-xl); padding: 3rem 2rem; text-align: center;">
        <h1 style="font-size: 2rem; font-weight: 800; color: var(--dark); margin: 0 0 0.75rem;">Welcome to ReportAll</h1>
        <p style="font-size: 1.125rem; color: var(--gray-500); max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.6;">
          A streamlined platform for property data, parcel mapping, and location intelligence.
        </p>
        <button class="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  `,
})
class JumbotronDemoComponent {}

const meta: Meta<JumbotronDemoComponent> = {
  title: 'Elements/Jumbotron',
  component: JumbotronDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic\n**ReportAll Note:** Changed and needs to be brought back\n**Reference:** [Vristo Jumbotron](https://angular.vristo.sbthemes.com/element/jumbotron)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<JumbotronDemoComponent>;
export const BasicJumbotron: Story = {};
