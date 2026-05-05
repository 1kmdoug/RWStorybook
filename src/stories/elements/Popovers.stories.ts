import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-popovers-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Default Popovers</div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 3rem 0;">
        <div *ngFor="let p of positions" style="position: relative; display: inline-block;">
          <button class="btn btn-outline-primary" (mouseenter)="active = p.dir" (mouseleave)="active = ''">
            Popover {{ p.dir }}
          </button>
          <div *ngIf="active === p.dir"
               [style]="p.style"
               style="position: absolute; z-index: 10; background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-md); padding: 0.75rem; width: 200px;">
            <strong style="font-size: 0.8125rem; display: block; margin-bottom: 0.25rem;">Popover Title</strong>
            <p style="font-size: 0.8125rem; color: var(--gray-500); margin: 0;">Some helpful context or description text.</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
class PopoversDemoComponent {
  active = '';
  positions = [
    { dir: 'top', style: 'bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);' },
    { dir: 'right', style: 'left: calc(100% + 8px); top: 50%; transform: translateY(-50%);' },
    { dir: 'bottom', style: 'top: calc(100% + 8px); left: 50%; transform: translateX(-50%);' },
    { dir: 'left', style: 'right: calc(100% + 8px); top: 50%; transform: translateY(-50%);' },
  ];
}

const meta: Meta<PopoversDemoComponent> = {
  title: 'Elements/Popovers',
  component: PopoversDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Default\n**Reference:** [Vristo Popovers](https://angular.vristo.sbthemes.com/element/popovers)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<PopoversDemoComponent>;
export const DefaultPopovers: Story = {};
