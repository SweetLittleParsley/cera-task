import { render, fireEvent } from '@testing-library/react'
import Carer from './Carer'

describe('Carer', () => {
  it('calls passed function when clicking on button', () => {
    const mockedOnClick = jest.fn()
    const wrapper = render(<Carer image='image.png' name='jon' availableSlots='2' onClick={mockedOnClick} />)
    fireEvent.click(wrapper.container.querySelector('button'))
    expect(mockedOnClick).toHaveBeenCalled()
  })
})