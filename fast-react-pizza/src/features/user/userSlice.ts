import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAddress } from '../../services/api_geocoding'
import type { UserState } from '../../types'

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // We get the user's geolocation position
  const positionObj = await getPosition()

  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  }

  // We use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position)
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`

  // We return an object with the data that we are interested in
  return { position, address } // payload of the fulfilled state
})

const initialState: UserState = {
  address: '',
  error: '',
  position: {
    latitude: '',
    longitude: '',
  },
  status: 'idle',
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    updateName(state, action) {
      state.username = action.payload
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position
        state.address = action.payload.address
        state.status = 'idle'
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export { fetchAddress }
export const { updateName } = userSlice.actions
export default userSlice
