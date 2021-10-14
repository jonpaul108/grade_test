import { App } from "./app.js";
const container = document.getElementById("app");
const app = new App();

container.append(app.view());
