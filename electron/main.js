import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: "../public/logo.png",
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173");
  win.setMenuBarVisibility(false);
  win.setMinimumSize(900, 700);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
