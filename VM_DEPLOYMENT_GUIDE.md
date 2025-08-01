# SmartSuiteX - VM Deployment Guide

## Overview
This guide covers deploying the SmartSuiteX website to a Linux VM using GitHub Actions and SSH.

## Current VM Status
- ✅ VM Working: Site accessible at http://20.51.127.168/
- 🔧 Domain Configuration: smartsuitex.com needs proper nginx configuration
- 🚀 Auto-Deployment: GitHub Actions workflow configured

## Prerequisites

### 1. Linux VM Requirements
- Ubuntu 18.04+ or CentOS 7+
- Nginx installed and configured
- Node.js 18.x (for build process)
- SSH access enabled
- User with sudo privileges

### 2. VM Setup Commands
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Nginx
sudo apt install nginx -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y

# Create deployment directory
sudo mkdir -p /var/www/smartsuitex
sudo chown -R www-data:www-data /var/www/smartsuitex

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

## GitHub Secrets Configuration

### Required Secrets
You need to add these secrets in your GitHub repository:

1. **VM_SSH_PRIVATE_KEY**: Your SSH private key for VM access
2. **VM_HOST**: Your VM IP address (e.g., `20.51.127.168`)
3. **VM_USER**: Username for SSH connection (e.g., `ubuntu`, `azureuser`)

### Setting up GitHub Secrets
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the exact names above

### SSH Key Setup
```bash
# On your local machine, generate SSH key pair (if not exists)
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy public key to VM
ssh-copy-id username@your-vm-ip

# Add private key content to GitHub secret VM_SSH_PRIVATE_KEY
cat ~/.ssh/id_rsa
```

## Nginx Configuration

### Create Nginx Site Configuration
```bash
sudo nano /etc/nginx/sites-available/smartsuitex
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name smartsuitex.com www.smartsuitex.com 20.51.127.168;
    
    root /var/www/smartsuitex/current;
    index index.html index.htm;
    
    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/x-javascript
        application/xml+rss
        application/javascript
        application/json;
}
```

### Enable the Site
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/smartsuitex /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Deployment Process

### Automatic Deployment
- **Trigger**: Push to `master` or `main` branch
- **Build**: React app built using `npm run build`
- **Deploy**: Files transferred to VM via SSH
- **Location**: `/var/www/smartsuitex/current/`
- **Restart**: Nginx automatically reloaded

### Manual Deployment
You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Select **Deploy SmartSuiteX to VM**
3. Click **Run workflow**

## SSL Certificate (Optional)

### Using Let's Encrypt
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d smartsuitex.com -d www.smartsuitex.com

# Auto-renewal (already set up by certbot)
sudo crontab -l | grep certbot
```

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**
   - Verify VM_SSH_PRIVATE_KEY secret is correct
   - Check VM_HOST and VM_USER secrets
   - Ensure SSH key is properly set up on VM

2. **Permission Denied**
   ```bash
   sudo chown -R www-data:www-data /var/www/smartsuitex
   sudo chmod -R 755 /var/www/smartsuitex
   ```

3. **Nginx Not Serving React App**
   - Check nginx configuration: `sudo nginx -t`
   - Verify files are in correct location: `ls -la /var/www/smartsuitex/current/`
   - Check nginx logs: `sudo tail -f /var/log/nginx/error.log`

4. **Domain Not Working**
   - Update DNS A record to point to VM IP
   - Verify nginx server_name includes your domain
   - Check firewall allows port 80/443

### Useful Commands
```bash
# Check deployment
ls -la /var/www/smartsuitex/current/

# Check nginx status
sudo systemctl status nginx

# View nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Monitoring

### Check Deployment Status
- **GitHub Actions**: Monitor workflow in repository Actions tab
- **VM Logs**: Check `/var/log/nginx/access.log` for requests
- **Application**: Verify at http://your-vm-ip or https://smartsuitex.com

### Health Check
```bash
# On VM - check if site is serving
curl -I http://localhost
curl -I http://your-domain.com
```

## Security Best Practices

1. **SSH Key Management**
   - Use dedicated deployment keys
   - Rotate keys regularly
   - Limit key permissions

2. **Firewall Configuration**
   ```bash
   sudo ufw allow 22/tcp   # SSH
   sudo ufw allow 80/tcp   # HTTP
   sudo ufw allow 443/tcp  # HTTPS
   sudo ufw enable
   ```

3. **Regular Updates**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

## Support

For deployment issues:
- Check GitHub Actions logs for build/deploy errors
- Review nginx error logs on VM
- Verify all secrets are correctly configured
- Ensure VM has sufficient disk space and memory

---

**Note**: Replace placeholder values (IP addresses, domain names, usernames) with your actual values when setting up the deployment.