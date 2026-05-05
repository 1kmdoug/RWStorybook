import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-alerts-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Default Alerts</div>
      <div *ngFor="let a of alerts" [class]="'alert alert-' + a.type">
        <span style="font-weight: 700;">{{ a.icon }}</span>
        <div>
          <strong>{{ a.title }}</strong> — {{ a.message }}
        </div>
        <button class="alert-close">×</button>
      </div>
    </div>
  `,
})
class AlertsDemoComponent {
  alerts = [
    { type: 'primary', icon: '●', title: 'Primary', message: 'This is a primary alert with left border accent.' },
    { type: 'success', icon: '✓', title: 'Success', message: 'Action completed successfully.' },
    { type: 'info', icon: 'ℹ', title: 'Info', message: 'Here is some useful information.' },
    { type: 'warning', icon: '⚠', title: 'Warning', message: 'Proceed with caution on this action.' },
    { type: 'danger', icon: '✕', title: 'Danger', message: 'Something went wrong. Please try again.' },
  ];
}

const meta: Meta<AlertsDemoComponent> = {
  title: 'Elements/Alerts',
  component: AlertsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default Alerts\n**Reference:** [Vristo Alerts](https://angular.vristo.sbthemes.com/element/alerts)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<AlertsDemoComponent>;
export const DefaultAlerts: Story = {};
