import { Meta } from '@storybook/react'

import { Button, ButtonProps } from '@/components/atoms/Button'

export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'default'
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'link', 'icon']
    }
  }
} as Meta<typeof Button>

export const Default = (args: ButtonProps) => <Button {...args} />
