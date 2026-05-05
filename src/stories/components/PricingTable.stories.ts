import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-pricing-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Basic Pricing Table</div>
      <p style="color: var(--info); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ❓ Open question: Does the Basic variant include a "Most Popular" highlight tab like the toggle version?
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
        <div *ngFor="let plan of plans" class="card" [style.border-color]="plan.featured ? 'var(--primary)' : 'var(--gray-200)'" [style.border-width]="plan.featured ? '2px' : '1px'">
          <div *ngIf="plan.featured" style="background: var(--primary); color: var(--white); text-align: center; padding: 0.375rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
            Most Popular
          </div>
          <div class="card-body" style="text-align: center;">
            <h4 style="font-size: 1rem; font-weight: 700; margin: 0 0 0.25rem;">{{ plan.name }}</h4>
            <div style="font-size: 2rem; font-weight: 800; color: var(--primary); margin: 0.75rem 0;">
              {{ plan.price }}<span style="font-size: 0.875rem; font-weight: 400; color: var(--gray-500);">/mo</span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 1rem 0; font-size: 0.8125rem; color: var(--gray-600);">
              <li *ngFor="let f of plan.features" style="padding: 0.375rem 0; border-bottom: 1px solid var(--gray-100);">{{ f }}</li>
            </ul>
            <button [class]="plan.featured ? 'btn btn-primary w-full' : 'btn btn-outline-primary w-full'">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
class PricingDemoComponent {
  plans = [
    { name: 'Starter', price: '$19', featured: false, features: ['5 Users', '10 GB Storage', 'Email Support'] },
    { name: 'Professional', price: '$49', featured: true, features: ['25 Users', '100 GB Storage', 'Priority Support', 'API Access'] },
    { name: 'Enterprise', price: '$99', featured: false, features: ['Unlimited Users', '1 TB Storage', '24/7 Support', 'API Access', 'Custom Integrations'] },
  ];
}

const meta: Meta<PricingDemoComponent> = {
  title: 'Components/Pricing Table',
  component: PricingDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic  
**Open Question:** Does basic have "most popular" tab like the toggle one?  
**Reference:** [Vristo Pricing Table](https://angular.vristo.sbthemes.com/component/pricing-table)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<PricingDemoComponent>;
export const BasicPricingTable: Story = {};
