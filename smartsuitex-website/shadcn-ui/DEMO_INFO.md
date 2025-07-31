# SmartSuitex Demo Information

## Demo URL
http://localhost:4000/

## Demo Credentials
- **Email:** demo@smartsuitex.com
- **Password:** demo123

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
1. Start the development server: `npm run demo`
2. Access the application at: http://localhost:4000/
3. Login with demo credentials
4. Explore all features with mock data

## Network Configuration
- Host: 0.0.0.0 (accessible from any IP)
- Port: 4000
- API: Mock API service (no backend required)

## Development
- All API calls are mocked for demo purposes
- Real-time features simulated
- OAuth flows simulated
- Email functionality simulated

## Demo Features Walkthrough

### 1. Authentication
- Login with demo credentials
- OAuth providers (simulated)
- Password reset functionality
- User registration

### 2. Dashboard
- Real-time statistics
- Recent activities
- Quick actions
- Performance metrics

### 3. CRM Management
- Contact management
- Lead tracking
- Deal pipeline
- Customer interactions

### 4. Project Management
- Project creation and tracking
- Task management
- Team collaboration
- Progress monitoring

### 5. Inventory Management
- Product catalog
- Stock tracking
- Supplier management
- Inventory reports

### 6. Billing & Subscription
- Subscription management
- Invoice history
- Payment methods
- Usage analytics

### 7. Email Features
- Contact form submission
- Newsletter subscription
- Email templates
- Automated emails

## Technical Implementation

### Mock API Service
- Located in `/src/services/mockApi.ts`
- Simulates real API responses
- Includes realistic delays
- Comprehensive data sets

### Real-time Features
- WebSocket simulation
- Live updates
- Notifications
- Activity feeds

### OAuth Integration
- Google, GitHub, LinkedIn
- Popup authentication
- Token management
- User profile sync

### Email System
- Contact form processing
- Newsletter management
- Template system
- Delivery simulation

## Environment Variables
```bash
VITE_API_BASE_URL=http://localhost:4000/api
VITE_WS_BASE_URL=ws://localhost:4000/ws
VITE_USE_MOCK_API=true
VITE_DEMO_MODE=true
VITE_ENABLE_REALTIME=true
VITE_ENABLE_OAUTH=true
VITE_ENABLE_EMAIL=true
```

## Commands
```bash
# Start demo server
npm run demo

# Build for production
npm run demo:build

# Preview production build
npm run demo:preview

# Regular development
npm run dev
```

---
*This is a demo version of SmartSuitex - All data is mock data for demonstration purposes* 