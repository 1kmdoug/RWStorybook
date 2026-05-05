import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-avatar-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Avatar — Initials</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1.5rem;">
        ReportAll uses the Initials variant (changed from Infobox). No photo avatars.
      </p>
      <div style="display: flex; gap: 1rem; align-items: end; flex-wrap: wrap;">
        <div *ngFor="let a of avatars" style="text-align: center;">
          <div [class]="'avatar avatar-' + a.size" [style.background]="a.color">{{ a.initials }}</div>
          <span style="display: block; margin-top: 0.375rem; font-size: 0.75rem; color: var(--gray-500);">{{ a.size }}</span>
        </div>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin: 2rem 0 0.75rem; color: var(--gray-700);">Color Variants</h4>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <div *ngFor="let c of colors" class="avatar avatar-md" [style.background]="c">JD</div>
      </div>
    </div>
  `,
})
class AvatarDemoComponent {
  avatars = [
    { initials: 'DM', size: 'sm', color: 'var(--primary)' },
    { initials: 'DM', size: 'md', color: 'var(--primary)' },
    { initials: 'DM', size: 'lg', color: 'var(--primary)' },
  ];
  colors = ['var(--primary)', 'var(--info)', 'var(--success)', 'var(--warning)', 'var(--danger)', 'var(--secondary)', 'var(--dark)'];
}

const meta: Meta<AvatarDemoComponent> = {
  title: 'Elements/Avatar',
  component: AvatarDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Infobox/Initials\n**ReportAll Override:** Changed to Initials\n**Reference:** [Vristo Avatar](https://angular.vristo.sbthemes.com/element/avatar)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<AvatarDemoComponent>;
export const Initials: Story = {};
