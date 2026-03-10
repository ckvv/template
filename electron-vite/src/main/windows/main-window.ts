import path from 'node:path'
import { BrowserWindow } from 'electron'
import { MAIN_WINDOW_CONFIG } from '../constants'

export function createMainWindow() {
  const isDevelopment = Boolean(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  const mainWindow = new BrowserWindow({
    ...MAIN_WINDOW_CONFIG,
    show: false,
    webPreferences: {
      contextIsolation: true,
      devTools: isDevelopment,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: true,
    },
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    void mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  }
  else {
    void mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    )
  }

  return mainWindow
}
