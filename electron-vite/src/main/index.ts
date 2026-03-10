import { app } from 'electron'
import started from 'electron-squirrel-startup'
import { registerAppLifecycle } from './app/lifecycle'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit()
}
registerAppLifecycle()
