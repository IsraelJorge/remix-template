import { render } from '@testing-library/react'

import { Button } from '@/components/atoms/Button'

describe('Button', () => {
  it('renders a button element', () => {
    const { getByRole } = render(<Button>Click me</Button>)

    const button = getByRole('button', { name: 'Click me' })

    expect(button).toBeInTheDocument()
  })
})
