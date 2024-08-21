import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

describe('HomePage', () => {
    it('Renders home page', () => {
        render(<HomePage/>)
        expect(screen.getByText('Templates')).toBeInTheDocument()
    })

})
