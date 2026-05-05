import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-tabs-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Border Tabs</div>
      <div class="tabs">
        <button
          *ngFor="let tab of tabs; let i = index"
          class="tab-item"
          [class.active]="activeTab === i"
          (click)="activeTab = i"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content" style="padding: 1rem 0;">
        <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.6;">
          {{ tabs[activeTab].content }}
        </p>
      </div>
    </div>
  `,
  imports: [CommonModule],
})
class TabsDemoComponent {
  activeTab = 0;
  tabs = [
    { label: 'Home', content: 'This is the Home tab content. In ReportAll, border tabs use the primary green for the active underline indicator.' },
    { label: 'Profile', content: 'Profile tab content lives here. Each tab panel should contain contextually related information.' },
    { label: 'Settings', content: 'Settings and configuration options. Keep tab labels concise — one or two words max.' },
    { label: 'Disabled', content: '' },
  ];
}

const meta: Meta<TabsDemoComponent> = {
  title: 'Components/Tabs',
  component: TabsDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Border Tabs  
**ReportAll Override:** Green (primary) outline on active tab  
**Reference:** [Vristo Tabs](https://angular.vristo.sbthemes.com/component/tabs)

Border Tabs are the standard tab component across ReportAll. The active state
uses the ReportAll green primary color for the bottom border indicator.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TabsDemoComponent>;

export const BorderTabs: Story = {};
