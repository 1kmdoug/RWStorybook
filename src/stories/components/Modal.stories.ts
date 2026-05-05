import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-modal-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Vertically Centered Modal</div>
      <button class="btn btn-primary" (click)="showModal = true">Open Modal</button>

      <div class="modal-backdrop" *ngIf="showModal" (click)="showModal = false">
        <div class="modal" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h3>Modal Title</h3>
            <button style="background: none; border: none; font-size: 1.25rem; cursor: pointer; color: var(--gray-400);"
                    (click)="showModal = false">&times;</button>
          </div>
          <div class="modal-body">
            <p style="color: var(--gray-600); font-size: 0.875rem; line-height: 1.6; margin: 0;">
              This is a vertically-centered modal. It's the primary modal pattern for ReportAll — centered
              both horizontally and vertically in the viewport.
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline-secondary" (click)="showModal = false">Cancel</button>
            <button class="btn btn-primary" (click)="showModal = false">Confirm</button>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-top: 1.5rem;">
      <div class="panel-heading">Custom Examples</div>
      <p style="color: var(--gray-500); font-size: 0.875rem;">
        Custom modal examples are also approved for use. These follow the same vertically-centered
        positioning but may include specialized content layouts — forms, confirmation dialogs,
        multi-step flows, etc.
      </p>
    </div>
  `,
})
class ModalDemoComponent {
  showModal = false;
}

const meta: Meta<ModalDemoComponent> = {
  title: 'Components/Modal',
  component: ModalDemoComponent,
  parameters: {
    docs: {
      description: {
        component: `
**Vristo Variant:** Vertically Centered, Custom Examples  
**Reference:** [Vristo Modal](https://angular.vristo.sbthemes.com/component/modal)

Modals should always be vertically centered. Custom examples (specialized content layouts)
are also approved. Dismiss via backdrop click, X button, or Cancel action.
        `,
      },
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ModalDemoComponent>;
export const VerticallyCentered: Story = {};
