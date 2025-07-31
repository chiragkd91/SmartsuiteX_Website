#!/usr/bin/env node

/**
 * Change Port Script for SmartSuitex Website
 * Usage: node scripts/change-port.js <port_number>
 */

const fs = require('fs');
const path = require('path');

const newPort = process.argv[2];

if (!newPort || isNaN(newPort)) {
  console.log('❌ Please provide a valid port number');
  console.log('Usage: node scripts/change-port.js <port_number>');
  console.log('Example: node scripts/change-port.js 3000');
  process.exit(1);
}

console.log(`🚀 Changing SmartSuitex website port to ${newPort}...\n`);

// Update vite.config.ts
function updateViteConfig() {
  const viteConfigPath = path.join(__dirname, '../vite.config.ts');
  let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Replace port numbers in server and preview config
  viteConfig = viteConfig.replace(/port: \d+/g, `port: ${newPort}`);
  
  fs.writeFileSync(viteConfigPath, viteConfig);
  console.log('✅ Updated vite.config.ts');
}

// Update package.json scripts
function updatePackageJson() {
  const packagePath = path.join(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Update demo scripts
  if (packageJson.scripts.demo) {
    packageJson.scripts.demo = packageJson.scripts.demo.replace(/--port \d+/, `--port ${newPort}`);
  }
  if (packageJson.scripts['demo:preview']) {
    packageJson.scripts['demo:preview'] = packageJson.scripts['demo:preview'].replace(/--port \d+/, `--port ${newPort}`);
  }
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json scripts');
}

// Update demo info file
function updateDemoInfo() {
  const demoInfoPath = path.join(__dirname, '../DEMO_INFO.md');
  let demoInfo = fs.readFileSync(demoInfoPath, 'utf8');
  
  // Replace all occurrences of the old port
  demoInfo = demoInfo.replace(/http:\/\/192\.168\.10\.15:\d+/g, `http://192.168.10.15:${newPort}`);
  demoInfo = demoInfo.replace(/Port: \d+/g, `Port: ${newPort}`);
  
  fs.writeFileSync(demoInfoPath, demoInfo);
  console.log('✅ Updated DEMO_INFO.md');
}

// Update demo banner component
function updateDemoBanner() {
  const bannerPath = path.join(__dirname, '../src/components/ui/demo-banner.tsx');
  let bannerContent = fs.readFileSync(bannerPath, 'utf8');
  
  // Replace port in demo banner
  bannerContent = bannerContent.replace(/http:\/\/192\.168\.10\.15:\d+/g, `http://192.168.10.15:${newPort}`);
  
  fs.writeFileSync(bannerPath, bannerContent);
  console.log('✅ Updated demo banner component');
}

// Main function
function changePort() {
  try {
    updateViteConfig();
    updatePackageJson();
    updateDemoInfo();
    updateDemoBanner();
    
    console.log(`\n🎉 Port successfully changed to ${newPort}!`);
    console.log(`\n📋 Next steps:`);
    console.log(`1. Run: npm run demo`);
    console.log(`2. Access: http://192.168.10.15:${newPort}/`);
    console.log(`3. Login with: demo@smartsuitex.com / demo123`);
    
  } catch (error) {
    console.error('❌ Error changing port:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  changePort();
}

module.exports = { changePort }; 