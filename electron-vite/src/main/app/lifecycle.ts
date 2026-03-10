import process from 'node:process'
import { app, BrowserWindow } from 'electron'
import { createMainWindow } from '../windows/main-window'

export function registerAppLifecycle() {
  app.on('ready', () => {
    createMainWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
}
