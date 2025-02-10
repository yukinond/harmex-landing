import type { Nitro } from 'nitropack'
import mongoose from 'mongoose'

export default async (_nitroApp: Nitro) => {
  try { 
    const { MONGODB_URI } = useRuntimeConfig();

    await mongoose.connect(MONGODB_URI);
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB')
  }
  catch (error) {
    console.error(error)
  }
}
