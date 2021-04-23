import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

/*
*   return do get, texto puro
    return response.send("aqui dentro")~
*   return do get, json
    return response.json({
        message: "aqui"
    })

    exemplo:
    app.get("/", (request, response) => ({
    return response.send("Estamos ONline")
}))
 */

export { routes };
