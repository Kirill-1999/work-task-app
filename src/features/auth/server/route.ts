import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

const app = new Hono()
    .post("/login", zValidator("json", z.object({

    })), (c) => {
        return c.json({ success: "ok" });
    });

export default app;