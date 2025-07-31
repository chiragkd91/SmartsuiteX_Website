#!/usr/bin/env node

/**
 * Demo Setup Script for SmartSuitex Website
 * This script configures the application for demo purposes
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up SmartSuitex Demo Configuration...\n');

// Demo configuration
const demoConfig = {
  // Vite configuration for demo
  viteConfig: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
  
  // Environment variables for demo
  envVars: {
    VITE_API_BASE_URL: 'http://192.168.10.15:3001/api',
    VITE_WS_BASE_URL: 'ws://192.168.10.15:3001/ws',
    VITE_USE_MOCK_API: 'true',
    VITE_DEMO_MODE: 'true',
    VITE_ENABLE_REALTIME: 'true',
    VITE_ENABLE_OAUTH: 'true',
    VITE_ENABLE_EMAIL: 'true',
  },
  
  // Demo credentials
  demoCredentials: {
    email: 'demo@smartsuitex.com',
    password: 'demo123',
  },
};

// Update package.json scripts for demo
function updatePackageScripts() {
  const packagePath = path.join(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  packageJson.scripts = {
    ...packageJson.scripts,
    'demo': 'vite --host 0.0.0.0 --port 5173',
    'demo:build': 'vite build',
    'demo:preview': 'vite preview --host 0.0.0.0 --port 5173',
  };
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json scripts for demo');
}

// Create demo environment file
function createDemoEnv() {
  const envPath = path.join(__dirname, '../.env.local');
  const envContent = Object.entries(demoConfig.envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local with demo configuration');
}

// Create demo info file
function createDemoInfo() {
  const demoInfoPath = path.join(__dirname, '../DEMO_INFO.md');
  const demoInfo = `# SmartSuitex Demo Information

## Demo URL
http://192.168.10.15:5173/

## Demo Credentials
- **Email:** ${demoConfig.demoCredentials.email}
- **Password:** ${demoConfig.demoCredentials.password}

## Features Available in Demo
- ✅ Complete authentication system
- ✅ Dashboard with real-time data
- ✅ CRM management
- ✅ Project management
- ✅ Inventory management
- ✅ Billing and subscription
- ✅ Email functionality
- ✅ OAuth providers (Google, GitHub, LinkedIn)
- ✅ Real-time updates via WebSocket

## Demo Data
The demo includes realistic mock data for:
- Users and profiles
- CRM contacts and leads
- Projects and tasks
- Inventory products
- Billing invoices
- Email templates

## Running the Demo
1. Start the development server: \`npm run demo\`
2. Access the application at: http://192.168.10.15:5173/
3. Login with demo credentials
4. Explore all features with mock data

## Network Configuration
- Host: 0.0.0.0 (accessible from any IP)
- Port: 5173
- API: Mock API service (no backend required)

## Development
- All API calls are mocked for demo purposes
- Real-time features simulated
- OAuth flows simulated
- Email functionality simulated

---
*This is a demo version of SmartSuitex - All data is mock data for demonstration purposes*
`;

  fs.writeFileSync(demoInfoPath, demoInfo);
  console.log('✅ Created DEMO_INFO.md with demo information');
}

// Main setup function
function setupDemo() {
  try {
    updatePackageScripts();
    createDemoEnv();
    createDemoInfo();
    
    console.log('\n🎉 Demo setup completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Run: npm run demo');
    console.log('2. Access: http://192.168.10.15:5173/');
    console.log('3. Login with: demo@smartsuitex.com / demo123');
    console.log('\n📖 See DEMO_INFO.md for more details');
    
  } catch (error) {
    console.error('❌ Error setting up demo:', error.message);
    process.exit(1);
  }
}

// Run setup if called directly
if (require.main === module) {
  setupDemo();
}

module.exports = { setupDemo, demoConfig }; 