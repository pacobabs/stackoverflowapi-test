import React from 'react'
import { act, render, screen, waitFor } from './utils/testUtils'
import Index from '../pages/index'

describe('Index page', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders error page when api request failed', async () => {
    ;(fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 400 })
      })
    )
    await act(async () => {
      render(<Index />)
    })
    await waitFor(() => {
      screen.getByText('Sorry! we vould not fetch the items')
    })
  })

  it('renders index page', async () => {
    await act(async () => {
      render(<Index />)
    })
    await waitFor(() => {
      screen.getByText('List of Stackoverflow users by reputation')
      screen.getByText('Jon Doe')
    })
  })
})
