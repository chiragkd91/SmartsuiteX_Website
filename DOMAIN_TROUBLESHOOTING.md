# SmartSuiteX Domain Troubleshooting Guide

## Issue: smartsuitex.com shows "ERR_CONNECTION_REFUSED"

## Step-by-Step Diagnosis

### 1. Check VM Status and IP Access

First, verify if your VM is still accessible:

```bash
# Test VM IP directly
curl -I http://20.51.127.168
# OR
ping 20.51.127.168
```

**Expected Result**: Should return HTTP response or ping replies

### 2. Check DNS Configuration

```bash
# Check DNS resolution
nslookup smartsuitex.com
dig smartsuitex.com

# Check if domain points to your VM IP
dig +short smartsuitex.com
```

**Expected Result**: Should return `20.51.127.168`

### 3. Check Domain Registration Status

```bash
# Check domain whois information
whois smartsuitex.com
```

**Look for**:
- Domain expiration date
- Name servers
- DNS records

### 4. Test Different Access Methods

```bash
# Test different protocols and ports
curl -v http://smartsuitex.com
curl -v https://smartsuitex.com
curl -v http://smartsuitex.com:80
telnet smartsuitex.com 80
```

## Common Issues and Solutions

### Issue 1: DNS Not Pointing to VM
**Problem**: Domain doesn't resolve to 20.51.127.168

**Solution**: Update DNS A Record
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS Management / DNS Settings
3. Update A Record:
   - Type: A
   - Name: @ (or root)
   - Value: 20.51.127.168
   - TTL: 300 (5 minutes)

### Issue 2: VM/Nginx Not Running
**Problem**: VM is down or Nginx is stopped

**Solution**: SSH to VM and check services
```bash
# SSH to your VM
ssh username@20.51.127.168

# Check Nginx status
sudo systemctl status nginx

# If not running, start it
sudo systemctl start nginx
sudo systemctl enable nginx

# Check if port 80 is listening
sudo netstat -tlnp | grep :80
```

### Issue 3: Firewall Blocking Connections
**Problem**: VM firewall blocking HTTP traffic

**Solution**: Configure firewall
```bash
# Check firewall status
sudo ufw status

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp

# If using Azure VM, also check Azure NSG (Network Security Group)
```

### Issue 4: Wrong Nginx Configuration
**Problem**: Nginx not configured for domain

**Solution**: Fix Nginx configuration
```bash
# Check nginx configuration
sudo nginx -t

# Edit site configuration
sudo nano /etc/nginx/sites-available/smartsuitex

# Ensure configuration includes:
server {
    listen 80;
    server_name smartsuitex.com www.smartsuitex.com 20.51.127.168;
    
    root /var/www/smartsuitex/current;
    index index.html index.htm;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Enable site and reload
sudo ln -s /etc/nginx/sites-available/smartsuitex /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```

### Issue 5: No Website Files Deployed
**Problem**: Website files not deployed to VM

**Solution**: Deploy files manually or trigger auto-deployment
```bash
# Check if files exist on VM
ls -la /var/www/smartsuitex/current/

# If empty, manually deploy or trigger GitHub Actions
```

## Quick Diagnostic Commands

Run these commands to get full diagnostic information:

### On Your Local Machine:
```bash
# Test domain resolution
nslookup smartsuitex.com 8.8.8.8
dig @8.8.8.8 smartsuitex.com

# Test connectivity
curl -v -m 10 http://smartsuitex.com
curl -v -m 10 http://20.51.127.168

# Trace route to domain
traceroute smartsuitex.com
```

### On Your VM (SSH Required):
```bash
# System status
sudo systemctl status nginx
sudo systemctl status ufw

# Network status
sudo netstat -tlnp | grep :80
sudo ss -tlnp | grep :80

# Check logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# File permissions
ls -la /var/www/smartsuitex/
ls -la /var/www/smartsuitex/current/

# Test local access
curl -v http://localhost
```

## Expected Working Configuration

### DNS Settings:
- A Record: smartsuitex.com → 20.51.127.168
- A Record: www.smartsuitex.com → 20.51.127.168

### VM Requirements:
- Nginx running on port 80
- Firewall allowing port 80/443
- Website files in /var/www/smartsuitex/current/
- Proper nginx site configuration

### Test Results:
```bash
# These should work:
curl http://20.51.127.168          # ✅ VM direct access
curl http://smartsuitex.com        # ✅ Domain access
nslookup smartsuitex.com           # ✅ DNS resolution
```

## Emergency Quick Fix

If you need immediate access, try this quick setup:

```bash
# SSH to VM
ssh username@20.51.127.168

# Create simple test page
sudo mkdir -p /var/www/html
echo "<h1>SmartSuiteX Test Page</h1>" | sudo tee /var/www/html/index.html

# Simple nginx config
sudo nano /etc/nginx/sites-available/default

# Add this configuration:
server {
    listen 80 default_server;
    server_name _;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}

# Restart nginx
sudo systemctl restart nginx

# Test
curl http://20.51.127.168
```

## Contact Support

If issue persists, provide these details:
1. Domain registrar (GoDaddy, Namecheap, etc.)
2. VM provider (Azure, AWS, etc.)
3. Results of diagnostic commands above
4. Any recent changes made to domain/VM

---

**Remember**: DNS changes can take 24-48 hours to propagate globally, but should work immediately in most cases.