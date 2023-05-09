import type { Meta, StoryObj } from '@storybook/react';
import { Component } from 'react';
import { withTranslation } from 'react-i18next';

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t('title')}</h2>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Welcome> = {
  title: 'Example/Button',
  component: Welcome,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Welcome>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
