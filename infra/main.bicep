@description('Static Web App name')
param name string = 'swa-aviemore-taxis'

@description('Region for the Static Web App control plane (content is served from a global CDN)')
@allowed(['westeurope', 'centralus', 'eastus2', 'westus2', 'eastasia'])
param location string = 'westeurope'

resource swa 'Microsoft.Web/staticSites@2024-04-01' = {
  name: name
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    allowConfigFileUpdates: true
    stagingEnvironmentPolicy: 'Enabled'
  }
}

output defaultHostname string = swa.properties.defaultHostname
output staticWebAppName string = swa.name
