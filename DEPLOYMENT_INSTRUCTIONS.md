# SmartSuiteX - Azure VM Deployment Instructions

## Overview
This repository contains the SmartSuiteX website configured for deployment to Azure VM with Nginx. The site works via IP address but needs proper nginx configuration for domain access.

## Current Status
- ✅ VM Working: Site accessible at http://20.51.127.168/
- ❌ Domain Issue: smartsuitex.com shows nginx default page  
- 🔧 Fix Needed: Configure nginx to serve React app

## Prerequisites
1. An Azure subscription
2. An Azure App Service web app created
3. GitHub repository with admin access

## Step 1: Create Azure App Service

1. Go to [Azure Portal](https://portal.azure.com)
2. Create a new **App Service**
3. Configure the following settings:
   - **Runtime stack**: Node.js (latest LTS version)
   - **Operating System**: Linux
   - **Region**: Choose your preferred region
   - **App Service Plan**: Choose based on your needs

## Step 2: Download Publish Profile

1. In Azure Portal, navigate to your App Service
2. Click on **Get publish profile** in the overview section
3. Save the downloaded `.PublishSettings` file

## Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Create a secret named: `AZURE_WEBAPP_PUBLISH_PROFILE`
5. Open the `.PublishSettings` file in a text editor
6. Copy the entire XML content and paste it as the secret value

## Step 4: Update Workflow Configuration

1. Open `.github/workflows/azure-webapps-node.yml`
2. Update the `AZURE_WEBAPP_NAME` environment variable with your actual Azure App Service name:
   ```yaml
   env:
     AZURE_WEBAPP_NAME: 'smartsuitex-app'  # Replace with your SmartSuiteX app name
   ```

## Step 5: Deploy

1. Commit and push your changes to the `main` or `master` branch
2. The GitHub Action will automatically trigger
3. Monitor the deployment in the **Actions** tab of your GitHub repository

## Project Structure

The deployment workflow:
1. **Builds** the React application using Vite
2. **Copies** the built files from `smartsuitex-website/shadcn-ui/dist/`
3. **Includes** the `web.config` for proper IIS routing
4. **Deploys** to Azure App Service

## Manual Deployment Trigger

You can also manually trigger deployment:
1. Go to **Actions** tab in GitHub
2. Select **Build and deploy SmartSuiteX to Azure Web App**
3. Click **Run workflow**

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check that all dependencies are properly installed
   - Ensure `package.json` is up to date
   - Verify Node.js version compatibility

2. **Deployment Fails**: 
   - Verify the publish profile secret is correctly configured
   - Check the Azure App Service name matches exactly
   - Ensure the App Service is running

3. **App Doesn't Load**:
   - Check if `web.config` is properly deployed
   - Verify React Router configuration
   - Check Azure App Service logs

### Viewing Logs:

1. Go to Azure Portal → Your App Service
2. Navigate to **Monitoring** → **Log stream**
3. Check for any runtime errors

## Environment Variables

If your app requires environment variables:
1. Go to Azure Portal → Your App Service
2. Navigate to **Settings** → **Configuration**
3. Add your environment variables in **Application settings**

## Custom Domain (Optional)

To use a custom domain:
1. Go to Azure Portal → Your App Service
2. Navigate to **Settings** → **Custom domains**
3. Follow the wizard to add and verify your domain

## SSL Certificate (Optional)

For HTTPS:
1. Go to Azure Portal → Your App Service
2. Navigate to **Settings** → **TLS/SSL settings**
3. Add a certificate (free certificates available for custom domains)

## Support

For issues specific to Azure App Service deployment, refer to:
- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [GitHub Actions for Azure](https://github.com/Azure/actions)