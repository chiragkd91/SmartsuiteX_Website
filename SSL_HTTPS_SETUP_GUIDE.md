# 🔒 SSL/HTTPS Setup Guide for SmartSuiteX

## Current Issue: ERR_CONNECTION_REFUSED on HTTPS

### Problem Diagnosis ✅
- **HTTP (Port 80)**: ✅ Working - http://smartsuitex.com
- **HTTPS (Port 443)**: ❌ Not configured - https://smartsuitex.com
- **Browser Behavior**: Tries HTTPS first, fails, shows error

## 🚀 IMMEDIATE FIX (Test Now)

**Option 1: Force HTTP Access**
```
http://smartsuitex.com
http://20.51.127.168
```

**Option 2: Browser Settings**
1. Type exactly: `http://smartsuitex.com` (with http://)
2. Or use IP: `http://20.51.127.168`

## 🔒 PERMANENT SOLUTION: Configure HTTPS/SSL

### Step 1: SSH to Your VM
```bash
ssh username@20.51.127.168
```

### Step 2: Install Certbot (Let's Encrypt)
```bash
# Update system
sudo apt update

# Install Certbot and Nginx plugin
sudo apt install certbot python3-certbot-nginx -y

# Check if Nginx is running
sudo systemctl status nginx
```

### Step 3: Configure Firewall for HTTPS
```bash
# Allow HTTPS traffic
sudo ufw allow 443/tcp
sudo ufw allow 'Nginx Full'
sudo ufw status

# For Azure VM, also check Network Security Group (NSG)
# In Azure Portal: VM → Networking → Add inbound port rule for 443
```

### Step 4: Get SSL Certificate
```bash
# Get free SSL certificate from Let's Encrypt
sudo certbot --nginx -d smartsuitex.com -d www.smartsuitex.com

# Follow prompts:
# 1. Enter email address
# 2. Agree to terms (Y)
# 3. Share email with EFF (Y/N - your choice)
# 4. Choose redirect option (2 - Redirect HTTP to HTTPS)
```

### Step 5: Verify SSL Configuration
```bash
# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Check certificate status
sudo certbot certificates
```

### Step 6: Test HTTPS Access
```bash
# From your local machine
curl -I https://smartsuitex.com
curl -I https://www.smartsuitex.com
```

## 🛠️ Manual Nginx HTTPS Configuration

If Certbot automatic setup doesn't work, here's manual configuration:

### Create SSL Configuration
```bash
sudo nano /etc/nginx/sites-available/smartsuitex
```

### Add This Configuration:
```nginx
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name smartsuitex.com www.smartsuitex.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS configuration
server {
    listen 443 ssl http2;
    server_name smartsuitex.com www.smartsuitex.com;
    
    # SSL Certificate paths (after getting certificate)
    ssl_certificate /etc/letsencrypt/live/smartsuitex.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/smartsuitex.com/privkey.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Website configuration
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
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

## 🚨 QUICK TEST COMMANDS

### Test Current HTTP Access (Should Work)
```powershell
# These should work RIGHT NOW
Invoke-WebRequest -Uri "http://smartsuitex.com"
Test-NetConnection -ComputerName "smartsuitex.com" -Port 80
```

### Test HTTPS Access (Currently Fails)
```powershell
# These will fail until SSL is configured
Invoke-WebRequest -Uri "https://smartsuitex.com"
Test-NetConnection -ComputerName "smartsuitex.com" -Port 443
```

## 🔄 Certificate Auto-Renewal

Certbot automatically sets up renewal. Verify with:
```bash
# Check auto-renewal
sudo certbot renew --dry-run

# Check renewal timer
sudo systemctl status certbot.timer
```

## 🌐 Azure-Specific Steps

If using Azure VM, also configure:

### 1. Network Security Group (NSG)
- Go to Azure Portal → Your VM → Networking
- Add inbound security rule:
  - Port: 443
  - Protocol: TCP
  - Action: Allow
  - Name: HTTPS

### 2. DNS Configuration
Ensure your domain's DNS A records point to the VM:
- A Record: smartsuitex.com → 20.51.127.168
- A Record: www.smartsuitex.com → 20.51.127.168

## 🎯 IMMEDIATE ACTION PLAN

### Right Now (Test HTTP):
```
1. Open browser
2. Type exactly: http://smartsuitex.com
3. Should work perfectly!
```

### Next Steps (Setup HTTPS):
```
1. SSH to VM: ssh username@20.51.127.168
2. Run: sudo certbot --nginx -d smartsuitex.com
3. Follow prompts
4. Test: https://smartsuitex.com
```

## 🆘 Troubleshooting

### Common Issues:

1. **Domain validation fails**:
   ```bash
   # Ensure DNS points to correct IP
   dig smartsuitex.com
   nslookup smartsuitex.com
   ```

2. **Firewall blocks HTTPS**:
   ```bash
   sudo ufw allow 443/tcp
   sudo ufw reload
   ```

3. **Nginx config error**:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Certificate issues**:
   ```bash
   sudo certbot certificates
   sudo certbot renew --force-renewal
   ```

## 📊 Expected Results After SSL Setup

### Before SSL (Current):
- ✅ http://smartsuitex.com (works)
- ❌ https://smartsuitex.com (fails)

### After SSL Setup:
- ✅ http://smartsuitex.com (redirects to HTTPS)
- ✅ https://smartsuitex.com (works with green lock)
- 🔒 Automatic HTTP → HTTPS redirect

---

**Summary: Your website works perfectly on HTTP. To fix the HTTPS issue, you need to configure SSL/TLS certificates on your VM.**