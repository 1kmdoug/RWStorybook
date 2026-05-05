import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-wizards-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Wizards — Text Only</div>
      <div style="max-width: 600px;">
        <!-- Step indicators -->
        <div style="display: flex; margin-bottom: 2rem;">
          <div *ngFor="let step of steps; let i = index; let last = last" style="display: flex; align-items: center; flex: 1;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <div style="width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8125rem; font-weight: 700; transition: all 0.2s;"
                   [style.background]="i <= currentStep ? 'var(--primary)' : 'var(--gray-200)'"
                   [style.color]="i <= currentStep ? 'var(--white)' : 'var(--gray-500)'">
                {{ i + 1 }}
              </div>
              <span style="font-size: 0.8125rem; font-weight: 600; white-space: nowrap;"
                    [style.color]="i <= currentStep ? 'var(--primary)' : 'var(--gray-400)'">
                {{ step.label }}
              </span>
            </div>
            <div *ngIf="!last" style="flex: 1; height: 2px; margin: 0 0.75rem;"
                 [style.background]="i < currentStep ? 'var(--primary)' : 'var(--gray-200)'"></div>
          </div>
        </div>

        <!-- Step content -->
        <div style="padding: 1.5rem; background: var(--gray-50); border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
          <h4 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem;">{{ steps[currentStep].label }}</h4>
          <p style="font-size: 0.875rem; color: var(--gray-500); margin: 0;">{{ steps[currentStep].content }}</p>
        </div>

        <div style="display: flex; justify-content: space-between;">
          <button class="btn btn-outline-secondary" [disabled]="currentStep === 0" (click)="currentStep = currentStep - 1">Previous</button>
          <button class="btn btn-primary" (click)="currentStep = Math.min(currentStep + 1, steps.length - 1)">
            {{ currentStep === steps.length - 1 ? 'Finish' : 'Next' }}
          </button>
        </div>
      </div>
    </div>
  `,
})
class WizardsDemoComponent {
  Math = Math;
  currentStep = 0;
  steps = [
    { label: 'Account', content: 'Enter your account information — name, email, and password.' },
    { label: 'Details', content: 'Fill in additional profile details and preferences.' },
    { label: 'Confirm', content: 'Review your information and confirm to complete setup.' },
  ];
}

const meta: Meta<WizardsDemoComponent> = {
  title: 'Forms/Wizards',
  component: WizardsDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Text Only\n**Reference:** [Vristo Wizards](https://angular.vristo.sbthemes.com/forms/wizards)\n\nText-only step indicators (no icons). Number circles with labels connected by a progress line.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<WizardsDemoComponent>;
export const TextOnly: Story = {};
