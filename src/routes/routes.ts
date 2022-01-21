import { Router } from "express";
const router = Router();

router.get("/home", ()=>{
    return "<h1>Hola</h1>"
})

export default router;
