import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-file-upload-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">File Upload — Full Reference</div>
      <div style="max-width: 500px;">
        <div class="form-group">
          <label class="form-label">Standard File Input</label>
          <input class="form-input" type="file" style="padding: 0.375rem;">
        </div>

        <div class="form-group">
          <label class="form-label">Drag & Drop Zone</label>
          <div style="border: 2px dashed var(--gray-300); border-radius: var(--radius-lg); padding: 2rem; text-align: center; cursor: pointer; transition: border-color 0.2s;"
               (mouseenter)="hovered = true" (mouseleave)="hovered = false"
               [style.border-color]="hovered ? 'var(--primary)' : 'var(--gray-300)'"
               [style.background]="hovered ? 'var(--ra-green-50)' : 'transparent'">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
            <p style="font-weight: 600; font-size: 0.875rem; margin: 0 0 0.25rem;">
              Drop files here or <span style="color: var(--primary); text-decoration: underline;">browse</span>
            </p>
            <p style="font-size: 0.8125rem; color: var(--gray-400); margin: 0;">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Multiple Files</label>
          <input class="form-input" type="file" multiple style="padding: 0.375rem;">
          <div class="form-help">Select multiple files at once</div>
        </div>
      </div>
    </div>
  `,
})
class FileUploadDemoComponent {
  hovered = false;
}

const meta: Meta<FileUploadDemoComponent> = {
  title: 'Forms/File Upload',
  component: FileUploadDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo File Upload](https://angular.vristo.sbthemes.com/forms/file-upload)` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<FileUploadDemoComponent>;
export const FileUpload: Story = {};
