import { Router } from 'https://deno.land/x/oak/mod.ts'
import { welcome } from './api.ts'

const router= new Router()

router.get('/api/welcome', welcome)

export default router