import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';

// use hoc for class based components
function ComponentUsingHook() {
  const { t } = useTranslation();
  return <div>{t('description.part2')}</div>;
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ComponentUsingHook> = {
  title: 'Example/Button',
  component: ComponentUsingHook,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ComponentUsingHook>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
