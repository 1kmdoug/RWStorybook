import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-infobox-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Infobox 1</div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem;">
        <div *ngFor="let box of boxes" class="infobox">
          <div class="infobox-icon" [style.background]="box.bg" [style.color]="box.color">{{ box.icon }}</div>
          <div class="infobox-content">
            <h4>{{ box.value }}</h4>
            <p>{{ box.label }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
class InfoboxDemoComponent {
  boxes = [
    { icon: '📊', value: '31.6K', label: 'Total Reports', bg: 'var(--ra-green-50)', color: 'var(--primary)' },
    { icon: '🕐', value: '1,900', label: 'Pending Reviews', bg: '#E0F7FA', color: 'var(--info)' },
    { icon: '⚡', value: '18.2%', label: 'Growth Rate', bg: '#FFF8E1', color: 'var(--warning)' },
    { icon: '👥', value: '862', label: 'Active Users', bg: '#FFF0EC', color: 'var(--danger)' },
  ];
}

const meta: Meta<InfoboxDemoComponent> = {
  title: 'Elements/Infobox',
  component: InfoboxDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Infobox 1\n**Reference:** [Vristo Infobox](https://angular.vristo.sbthemes.com/element/infobox)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<InfoboxDemoComponent>;
export const Infobox1: Story = {};
