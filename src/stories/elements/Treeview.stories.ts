import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-treeview-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Animated Treeview</div>
      <div style="font-size: 0.875rem; max-width: 300px;">
        <div *ngFor="let node of tree" style="margin-bottom: 0.25rem;">
          <div (click)="node.open = !node.open" style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem; padding: 0.375rem 0.5rem; border-radius: var(--radius-sm); transition: background 0.15s;"
               [style.background]="node.open ? 'var(--ra-green-50)' : 'transparent'">
            <span style="transition: transform 0.2s; display: inline-block; font-size: 0.75rem;"
                  [style.transform]="node.open ? 'rotate(90deg)' : 'rotate(0deg)'">▶</span>
            <span style="font-weight: 600;">{{ node.label }}</span>
          </div>
          <div *ngIf="node.open" style="padding-left: 1.5rem; overflow: hidden;">
            <div *ngFor="let child of node.children" style="padding: 0.25rem 0.5rem; color: var(--gray-600); cursor: pointer; border-radius: var(--radius-sm);"
                 (mouseenter)="$event.target.style.background='var(--gray-50)'"
                 (mouseleave)="$event.target.style.background='transparent'">
              {{ child }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
class TreeviewDemoComponent {
  tree = [
    { label: 'Documents', open: true, children: ['Report_Q1.pdf', 'Budget_2026.xlsx', 'Notes.md'] },
    { label: 'Images', open: false, children: ['logo.png', 'banner.jpg', 'icon.svg'] },
    { label: 'Downloads', open: false, children: ['installer.exe', 'data.csv'] },
  ];
}

const meta: Meta<TreeviewDemoComponent> = {
  title: 'Elements/Treeview',
  component: TreeviewDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Animated\n**Reference:** [Vristo Treeview](https://angular.vristo.sbthemes.com/element/treeview)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<TreeviewDemoComponent>;
export const AnimatedTreeview: Story = {};
