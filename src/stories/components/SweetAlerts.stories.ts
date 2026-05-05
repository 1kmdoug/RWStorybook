import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-sweet-alerts-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Sweet Alerts</div>
      <p style="color: var(--danger); font-size: 0.8125rem; font-weight: 600; margin-bottom: 1rem;">
        ⚠️ Guidance needed: When to use Basic vs. Title-with-Text. See @Doug McLaughlin.
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <button class="btn btn-primary" (click)="activeAlert = 'basic'">Basic Alert</button>
        <button class="btn btn-outline-primary" (click)="activeAlert = 'title'">Title + Text Alert</button>
      </div>

      <!-- Basic SweetAlert mockup -->
      <div *ngIf="activeAlert" style="background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-xl); padding: 2rem; max-width: 400px; text-align: center; margin: 0 auto;">
        <div *ngIf="activeAlert === 'basic'">
          <div style="width: 4rem; height: 4rem; border-radius: 50%; background: var(--ra-green-50); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem; color: var(--primary);">✓</div>
          <h3 style="margin: 0 0 0.5rem; font-size: 1.25rem;">Good job!</h3>
          <button class="btn btn-primary" style="margin-top: 1rem;" (click)="activeAlert = null">OK</button>
        </div>
        <div *ngIf="activeAlert === 'title'">
          <div style="width: 4rem; height: 4rem; border-radius: 50%; background: #FFF8E1; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem; color: var(--warning);">!</div>
          <h3 style="margin: 0 0 0.5rem; font-size: 1.25rem;">Are you sure?</h3>
          <p style="color: var(--gray-500); font-size: 0.875rem; margin: 0 0 1.25rem;">You won't be able to revert this action.</p>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <button class="btn btn-outline-secondary" (click)="activeAlert = null">Cancel</button>
            <button class="btn btn-warning" (click)="activeAlert = null">Yes, do it</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
class SweetAlertsDemoComponent {
  activeAlert: string | null = null;
}

const meta: Meta<SweetAlertsDemoComponent> = {
  title: 'Components/Sweet Alerts',
  component: SweetAlertsDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic; A title with a text under  
**ReportAll Note:** Need guidance on when to use each variant  
**Reference:** [Vristo Sweet Alerts](https://angular.vristo.sbthemes.com/component/sweetalert)

Two approved alert patterns — a simple confirmation (Basic) and a destructive-action
confirmation with title and explanatory text. Usage guidelines TBD.
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SweetAlertsDemoComponent>;
export const SweetAlerts: Story = {};
