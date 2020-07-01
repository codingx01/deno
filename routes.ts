import { Router } from 'https://deno.land/x/oak/mod.ts'
import { welcome, addGuest, getGuest, updateGuest, deleteGuest } from './api.ts'

const router= new Router()

router
.get('/api/welcome', welcome)
.post('/api/add-guest', addGuest)
.get('/api/get-guests', getGuest)
.put('/api/update-guest', updateGuest)
.delete('/api/delete-guest/:id', deleteGuest)

export default router