targetScope = 'subscription'

@description('Resource group name')
param resourceGroupName string = 'rg-aviemore-taxis'

@description('Static Web App name')
param name string = 'swa-aviemore-taxis'

@description('Region for the resource group and Static Web App control plane')
@allowed(['westeurope', 'centralus', 'eastus2', 'westus2', 'eastasia'])
param location string = 'westeurope'

resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: resourceGroupName
  location: location
}

module swa 'modules/swa.bicep' = {
  name: 'swa-deployment'
  scope: rg
  params: {
    name: name
    location: location
  }
}

output defaultHostname string = swa.outputs.defaultHostname
output staticWebAppName string = swa.outputs.staticWebAppName
