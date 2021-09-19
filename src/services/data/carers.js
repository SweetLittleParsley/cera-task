export const getCarers = () => {
  const endpoint = 'https://ceracare.github.io/carers.json'
  return fetch(endpoint)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json()
        case 400: // to be explicit
        case 404: // to be explicit
        default:
          return Promise.reject(false)
      }
    })
    .catch(() => false)
}

export const getAvailableSlots = () => {
  const endpoint = 'https://ceracare.github.io/availableSlots.json'
  return fetch(endpoint)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json()
        case 400: // to be explicit
        case 404: // to be explicit
        default:
          return Promise.reject(false)
      }
    })
    .catch(() => false)
}

// carer and slot were to be used with a real POST
export const bookSlot = ({ carer, slot }) => {
  const endpoint = 'https://ceracare.github.io/bookSlot.json'
  return fetch(endpoint)
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json()
        case 400: // to be explicit
        case 404: // to be explicit
        default:
          return Promise.reject(false)
      }
    })
    .catch(() => false)
}