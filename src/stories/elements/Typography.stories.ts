import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'vristo-typography-demo',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-heading">Typography — Full Reference</div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--gray-700);">Headings</h4>
      <div style="margin-bottom: 2rem;">
        <h1 style="margin: 0 0 0.25rem;">Heading 1 <span style="font-size: 0.75rem; color: var(--gray-400); font-weight: 400;">2rem / 700</span></h1>
        <h2 style="margin: 0 0 0.25rem;">Heading 2 <span style="font-size: 0.75rem; color: var(--gray-400); font-weight: 400;">1.5rem / 700</span></h2>
        <h3 style="margin: 0 0 0.25rem;">Heading 3 <span style="font-size: 0.75rem; color: var(--gray-400); font-weight: 400;">1.25rem / 600</span></h3>
        <h4 style="margin: 0 0 0.25rem;">Heading 4 <span style="font-size: 0.75rem; color: var(--gray-400); font-weight: 400;">1.125rem / 600</span></h4>
        <h5 style="margin: 0 0 0.25rem;">Heading 5 <span style="font-size: 0.75rem; color: var(--gray-400); font-weight: 400;">1rem / 600</span></h5>
        <h6 style="margin: 0 0 0.25rem;">Heading 6 <span style="font-size: 0.75rem; color: var(--gray-400); font-weight: 400;">0.875rem / 600</span></h6>
      </div>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--gray-700);">Body Text</h4>
      <p style="font-size: 0.875rem; line-height: 1.6; color: var(--gray-600); margin-bottom: 1rem;">
        This is body text at 0.875rem (14px) with 1.6 line-height. It's the standard paragraph
        style throughout ReportAll interfaces. Color uses the gray-600 token for readability
        without harsh contrast.
      </p>
      <p style="font-size: 0.8125rem; line-height: 1.5; color: var(--gray-500); margin-bottom: 2rem;">
        Smaller supporting text at 0.8125rem (13px) — used for help text, captions, and secondary info.
      </p>

      <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--gray-700);">Inline Styles</h4>
      <div style="font-size: 0.875rem; color: var(--gray-600);">
        <p><strong>Bold text</strong> for emphasis.</p>
        <p><em>Italic text</em> for titles and terms.</p>
        <p><a href="javascript:void(0)" style="color: var(--primary); text-decoration: none;">Link text</a> uses primary green.</p>
        <p><code style="background: var(--gray-100); padding: 0.125rem 0.375rem; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.8125rem;">Inline code</code> for technical references.</p>
        <p><mark style="background: #FFF59D; padding: 0.125rem 0.25rem; border-radius: 2px;">Highlighted text</mark> for callouts.</p>
        <p><del>Strikethrough</del> for removed content.</p>
      </div>
    </div>
  `,
})
class TypographyDemoComponent {}

const meta: Meta<TypographyDemoComponent> = {
  title: 'Elements/Typography',
  component: TypographyDemoComponent,
  parameters: { docs: { description: { component: `**Vristo Variant:** Keep all\n**Reference:** [Vristo Typography](https://angular.vristo.sbthemes.com/element/typography)\n\nAll Vristo typography styles are approved for use.` } } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<TypographyDemoComponent>;
export const FullReference: Story = {};
