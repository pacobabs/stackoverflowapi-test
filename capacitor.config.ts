import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.stackoverflowapitest',
  appName: 'stackoverflowapi-test',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
}

export default config
