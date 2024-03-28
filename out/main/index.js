import { app, ipcMain, BrowserWindow, shell } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import __cjs_url__ from "node:url";
import __cjs_path__ from "node:path";
import __cjs_mod__ from "node:module";
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require2 = __cjs_mod__.createRequire(import.meta.url);
const icon = "data:image/svg+xml,%3csvg%20width='1440'%20height='1440'%20viewBox='0%200%201440%201440'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1440%2048C1440%2021.4903%201418.51%200%201392%200H48C21.4903%200%200%2021.4904%200%2048V1392C0%201418.51%2021.4903%201440%2048%201440H172C198.51%201440%20220%201418.51%20220%201392V1386.09C220%201278.26%20342%201215.99%20460.333%201166.49C578.278%201117.22%20616.056%201075.65%20616.056%20986.743C616.056%20962.521%20608.63%20952.877%20599.043%20940.428C587.506%20925.445%20572.84%20906.399%20564.222%20852.982C561.655%20837.081%20555.201%20833.537%20547.935%20829.547C536.649%20823.35%20523.406%20816.077%20519.722%20759.764C519.722%20753.448%20520.232%20747.945%20521.078%20743.162C524.661%20722.888%20534.901%20700.053%20532.072%20679.661C529.48%20660.973%20526.51%20637.51%20524.778%20617.053C522%20582.71%20545.863%20516.237%20593.611%20477.415C629.341%20448.365%20657.791%20436.155%20704.36%20434.223C737.385%20432.853%20756.918%20437.756%20787.389%20450.189C864.525%20481.662%20918.778%20573.059%20915.167%20617.107C913.463%20637.547%20910.51%20660.987%20907.927%20679.666C905.103%20700.083%20915.384%20722.94%20918.977%20743.235C919.823%20748.014%20920.333%20753.511%20920.333%20759.818C916.582%20816.132%20903.332%20823.404%20892.04%20829.601C884.77%20833.591%20878.312%20837.135%20875.722%20853.036C867.077%20906.435%20852.437%20925.486%20840.925%20940.467C831.353%20952.923%20823.944%20962.565%20823.944%20986.797C823.944%201075.76%20861.611%201117.27%20979.556%201166.55C1097.94%201215.99%201220%201278.26%201220%201386.09V1392C1220%201418.51%201241.49%201440%201268%201440H1392C1418.51%201440%201440%201418.51%201440%201392V48Z'%20fill='black'%20fill-opacity='0.7'%20/%3e%3c/svg%3e";
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}
app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });
  ipcMain.on("ping", () => console.log("pong"));
  createWindow();
  app.on("activate", function() {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
