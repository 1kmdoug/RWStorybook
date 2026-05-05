import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-quill-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-heading">Quill Editor — Basic</div>
      <div style="max-width: 600px;">
        <!-- Toolbar mockup -->
        <div style="border: 1px solid var(--gray-300); border-bottom: none; border-radius: var(--radius-md) var(--radius-md) 0 0; padding: 0.5rem; display: flex; gap: 0.25rem; flex-wrap: wrap; background: var(--gray-50);">
          <button *ngFor="let tool of toolbar" style="padding: 0.25rem 0.5rem; background: none; border: 1px solid transparent; border-radius: var(--radius-sm); cursor: pointer; font-size: 0.8125rem; color: var(--gray-600);"
                  (mouseenter)="$event.target.style.background='var(--gray-200)'"
                  (mouseleave)="$event.target.style.background='transparent'">
            {{ tool }}
          </button>
        </div>
        <!-- Editor area -->
        <div style="border: 1px solid var(--gray-300); border-radius: 0 0 var(--radius-md) var(--radius-md); padding: 1rem; min-height: 150px; font-size: 0.875rem; color: var(--gray-600); line-height: 1.6;" contenteditable="true">
          <p>This is a basic Quill rich text editor. It supports <strong>bold</strong>, <em>italic</em>, and other formatting options.</p>
          <p>Use for content fields that need more than plain text — descriptions, notes, rich comments.</p>
        </div>
      </div>
    </div>
  `,
})
class QuillDemoComponent {
  toolbar = ['B', 'I', 'U', 'S', 'H1', 'H2', '•', '1.', '""', '<>', '🔗', '📷'];
}

const meta: Meta<QuillDemoComponent> = {
  title: 'Forms/Quill Editor',
  component: QuillDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Basic\n**Reference:** [Vristo Quill Editor](https://angular.vristo.sbthemes.com/forms/quill-editor)\n\nBasic rich text editor with standard formatting toolbar.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<QuillDemoComponent>;
export const BasicQuill: Story = {};
