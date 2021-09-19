import { render } from '@testing-library/react'
import Carers from './Carers'

describe('Carers', () => {
  it('renders correctly', () => {
    expect(render(<Carers />).container).toMatchSnapshot() 
  })
})