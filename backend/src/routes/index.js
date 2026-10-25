import { Router } from "express";
import reactorRoutes from "./reactorRoutes.js";
import inventarioRoutes from "./inventarioRoutes.js";
import cargaRoutes from "./cargaRoutes.js";
import misionRoutes from "./misionRoutes.js";

const router = Router();

router.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Ejercicio 1: Estabiliza el Reactor (/adjust, /reboot)
router.use("/", reactorRoutes);

// Ejercicio 2: AstroLogistics
router.use("/api/inventario", inventarioRoutes);
router.use("/api/carga", cargaRoutes);
router.use("/api/mision", misionRoutes);

export default router;
