import { Router } from "express"
const router = Router()

router.get("/", (req, res) => res.render("index", { title: "Inicio"}))
router.get("/about", (req, res) => res.render("about", { title: "Sobre Nosotros"}))
router.get("/contact", (req, res) => res.render("contact", { title: "Contactanos"}))
router.get("/integrant", (req, res) => res.render("integrant", { title: "Integrantes del Team"}))
router.get("/events", (req, res) => res.render("events", { title: "Eventos"}))
router.get("/store", (req, res) => res.render("store", { title: "Nuestra Tienda"}))
export default router 