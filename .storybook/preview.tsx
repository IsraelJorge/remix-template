import type { Preview } from '@storybook/react'

import { TestWrapper } from '@/components/molecules/TestWrapper'

import '@/styles/tailwind.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    Story => (
      <TestWrapper>
        <Story />
      </TestWrapper>
    )
  ]
}

export default preview
