import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-notifications-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Notifications</div>
      <p style="color: var(--danger); font-size: 0.8125rem; font-weight: 600; margin-bottom: 1.5rem;">
        ⚠️ Guidance needed: When to use Basic vs. Background Color. See @Doug McLaughlin.
      </p>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--gray-700);">Basic Notification</h4>
      <div style="background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-md); padding: 1rem; display: flex; align-items: flex-start; gap: 0.75rem; max-width: 400px; margin-bottom: 1.5rem;">
        <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--ra-green-50); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--primary); font-weight: 700;">✓</div>
        <div>
          <p style="font-weight: 600; font-size: 0.875rem; margin: 0;">Success</p>
          <p style="font-size: 0.8125rem; color: var(--gray-500); margin: 0.25rem 0 0;">Your changes have been saved.</p>
        </div>
        <button style="margin-left: auto; background: none; border: none; color: var(--gray-400); cursor: pointer; font-size: 1rem;">×</button>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--gray-700);">Background Color Notification</h4>
      <div *ngFor="let n of colorNotifs" [style.background]="n.bg" [style.color]="n.text" style="border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.75rem; max-width: 400px; margin-bottom: 0.5rem;">
        <span style="font-weight: 700;">{{ n.icon }}</span>
        <span style="font-size: 0.875rem;">{{ n.message }}</span>
      </div>
    </div>
  `,
})
class NotificationsDemoComponent {
  colorNotifs = [
    { bg: 'var(--primary)', text: 'var(--white)', icon: '✓', message: 'Success notification' },
    { bg: 'var(--info)', text: 'var(--white)', icon: 'ℹ', message: 'Information notification' },
    { bg: 'var(--warning)', text: 'var(--dark)', icon: '⚠', message: 'Warning notification' },
    { bg: 'var(--danger)', text: 'var(--white)', icon: '✕', message: 'Error notification' },
  ];
}

const meta: Meta<NotificationsDemoComponent> = {
  title: 'Components/Notifications',
  component: NotificationsDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Basic, Background Color  
**ReportAll Note:** Need guidance on when to use each variant  
**Reference:** [Vristo Notifications](https://angular.vristo.sbthemes.com/component/notifications)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<NotificationsDemoComponent>;
export const Notifications: Story = {};
