import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-clipboard-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Clipboard — Copy from Input</div>
      <div style="max-width: 500px;">
        <div class="form-group">
          <label class="form-label">Copy to Clipboard</label>
          <div style="display: flex; gap: 0;">
            <input class="form-input" type="text" [value]="copyText" readonly
                   style="border-radius: var(--radius-md) 0 0 var(--radius-md); background: var(--gray-50);">
            <button class="btn btn-primary" style="border-radius: 0 var(--radius-md) var(--radius-md) 0; white-space: nowrap;"
                    (click)="copied = true">
              {{ copied ? '✓ Copied!' : 'Copy' }}
            </button>
          </div>
        </div>

        <div class="form-group" style="margin-top: 1.5rem;">
          <label class="form-label">Another example — API Key</label>
          <div style="display: flex; gap: 0;">
            <input class="form-input" type="text" value="sk_live_abc123def456ghi789" readonly
                   style="border-radius: var(--radius-md) 0 0 var(--radius-md); background: var(--gray-50); font-family: var(--font-mono); font-size: 0.8125rem;">
            <button class="btn btn-outline-primary" style="border-radius: 0 var(--radius-md) var(--radius-md) 0; white-space: nowrap;">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
class ClipboardDemoComponent {
  copyText = 'https://reportall.com/share/abc123';
  copied = false;
}

const meta: Meta<ClipboardDemoComponent> = {
  title: 'Forms/Clipboard',
  component: ClipboardDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Copy from Input\n**Reference:** [Vristo Clipboard](https://angular.vristo.sbthemes.com/forms/clipboard)\n\nInput field with adjacent copy button. Used for shareable links, API keys, etc.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ClipboardDemoComponent>;
export const CopyFromInput: Story = {};
