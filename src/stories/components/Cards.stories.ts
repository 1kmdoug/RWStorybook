import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-cards-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Card 1 — Primary</div>
      <p style="color: var(--gray-500); font-size: 0.8125rem; margin-bottom: 1rem;">
        ⚠️ Card 1 is the primary/default card unless designs explicitly call for Card 2.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
        <div class="card">
          <div class="card-body">
            <div class="card-title">Card Title</div>
            <p class="card-text">This is Card 1 — the default card pattern for ReportAll. Simple bordered container with body content and optional footer.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-sm">Action</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="card-title">Another Card</div>
            <p class="card-text">Cards can hold any content — stats, forms, tables, lists. The padding and border treatment stays consistent.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-top: 1.5rem;">
      <div class="panel-heading">Card 2 — Secondary</div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
        <div class="card" style="border-left: 4px solid var(--primary);">
          <div class="card-body">
            <div class="card-title">Accented Card</div>
            <p class="card-text">Card 2 uses a left-border accent. Use only when designs explicitly specify this variant.</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
class CardsDemoComponent {}

const meta: Meta<CardsDemoComponent> = {
  title: 'Components/Cards',
  component: CardsDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Card 1 and 2  
**ReportAll Note:** Primary should be Card 1 unless designs say otherwise  
**Reference:** [Vristo Cards](https://angular.vristo.sbthemes.com/component/cards)
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CardsDemoComponent>;
export const Cards: Story = {};
