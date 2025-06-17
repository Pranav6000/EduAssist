import { app, BrowserWindow, ipcMain } from "electron";
import store from "../src/store/store.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

ipcMain.handle("store-get", (event, key) => {
  return store.get(key);
});

ipcMain.handle("store-set", (event, key, value) => {
  store.set(key, value);
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: "../public/logo.png",
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173/login");
  win.setMenuBarVisibility(false);
  win.setMinimumSize(800, 700);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
