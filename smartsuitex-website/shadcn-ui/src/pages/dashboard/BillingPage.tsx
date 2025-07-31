import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  CreditCard,
  Download,
  Eye,
  Plus,
  Settings,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  Zap,
  Shield,
  BarChart3,
} from 'lucide-react';

const BillingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock subscription data
  const subscription = {
    plan: 'Professional',
    status: 'active',
    nextBilling: '2024-02-15',
    amount: 99.99,
    currency: 'USD',
    users: 25,
    maxUsers: 50,
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Priority Support',
      'API Access',
      'Custom Integrations',
    ],
  };

  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiry: '12/25',
      isDefault: true,
    },
    {
      id: 2,
      type: 'card',
      last4: '8888',
      brand: 'Mastercard',
      expiry: '08/26',
      isDefault: false,
    },
  ];

  // Mock invoices
  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-15',
      amount: 99.99,
      status: 'paid',
      description: 'Professional Plan - January 2024',
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-15',
      amount: 99.99,
      status: 'paid',
      description: 'Professional Plan - December 2023',
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-15',
      amount: 99.99,
      status: 'paid',
      description: 'Professional Plan - November 2023',
    },
  ];

  // Mock usage data
  const usageData = [
    { metric: 'API Calls', used: 12500, limit: 50000, unit: 'calls' },
    { metric: 'Storage', used: 45.2, limit: 100, unit: 'GB' },
    { metric: 'Users', used: 25, limit: 50, unit: 'users' },
    { metric: 'Projects', used: 12, limit: 100, unit: 'projects' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'past_due': return 'bg-red-100 text-red-800';
      case 'canceled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUsagePercentage = (used: number, limit: number) => {
    return Math.round((used / limit) * 100);
  };

  const getUsageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your subscription, payment methods, and billing history</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Invoices
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Upgrade Plan
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Current Subscription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Plan</span>
                    <span className="font-semibold">{subscription.plan}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className={getStatusColor(subscription.status)}>
                      {subscription.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Next Billing</span>
                    <span className="font-semibold">
                      {new Date(subscription.nextBilling).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Amount</span>
                    <span className="font-semibold">
                      ${subscription.amount} {subscription.currency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Users</span>
                    <span className="font-semibold">
                      {subscription.users} / {subscription.maxUsers}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-gray-600">Features:</span>
                  <ul className="space-y-1">
                    {subscription.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Add Payment Method</h3>
                    <p className="text-sm text-gray-600">Add a new card or bank account</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3" onClick={() => setActiveTab('payment')}>
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Download className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Download Invoices</h3>
                    <p className="text-sm text-gray-600">Get your billing history</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3" onClick={() => setActiveTab('invoices')}>
                  View Invoices
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Settings className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Billing Settings</h3>
                    <p className="text-sm text-gray-600">Manage billing preferences</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-3">
                  Manage Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                Manage your payment methods for automatic billing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-semibold">
                          {method.brand} •••• {method.last4}
                        </p>
                        <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {method.isDefault && (
                        <Badge variant="secondary">Default</Badge>
                      )}
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Billing History
              </CardTitle>
              <CardDescription>
                View and download your past invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                      <TableCell>${invoice.amount}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Usage Analytics
              </CardTitle>
              <CardDescription>
                Monitor your current usage against plan limits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {usageData.map((item) => {
                  const percentage = getUsagePercentage(item.used, item.limit);
                  return (
                    <div key={item.metric} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.metric}</span>
                        <span className={`font-semibold ${getUsageColor(percentage)}`}>
                          {item.used} / {item.limit} {item.unit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            percentage >= 90 ? 'bg-red-500' : percentage >= 75 ? 'bg-orange-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        {percentage}% of limit used
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingPage; 