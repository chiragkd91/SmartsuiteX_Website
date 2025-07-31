import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Package,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Warehouse,
  Truck,
  ShoppingCart,
  DollarSign,
  BarChart3,
  FileText,
  Download,
  Upload,
} from 'lucide-react';

const InventoryManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data
  const products = [
    {
      id: 1,
      name: 'Laptop Pro X1',
      sku: 'LP-X1-001',
      category: 'Electronics',
      stock: 45,
      minStock: 10,
      price: '$1,299.99',
      supplier: 'TechCorp Inc.',
      lastUpdated: '2024-01-15',
      status: 'in-stock',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      sku: 'WM-002',
      category: 'Accessories',
      stock: 8,
      minStock: 15,
      price: '$29.99',
      supplier: 'AccessoryPro',
      lastUpdated: '2024-01-14',
      status: 'low-stock',
    },
    {
      id: 3,
      name: 'Office Chair',
      sku: 'OC-003',
      category: 'Furniture',
      stock: 0,
      minStock: 5,
      price: '$199.99',
      supplier: 'FurnitureCo',
      lastUpdated: '2024-01-10',
      status: 'out-of-stock',
    },
    {
      id: 4,
      name: 'USB-C Cable',
      sku: 'UC-004',
      category: 'Accessories',
      stock: 120,
      minStock: 20,
      price: '$12.99',
      supplier: 'CableTech',
      lastUpdated: '2024-01-16',
      status: 'in-stock',
    },
  ];

  const transactions = [
    {
      id: 1,
      type: 'in',
      product: 'Laptop Pro X1',
      quantity: 10,
      date: '2024-01-15',
      reference: 'PO-2024-001',
      user: 'John Doe',
    },
    {
      id: 2,
      type: 'out',
      product: 'Wireless Mouse',
      quantity: 5,
      date: '2024-01-14',
      reference: 'SO-2024-002',
      user: 'Jane Smith',
    },
    {
      id: 3,
      type: 'in',
      product: 'USB-C Cable',
      quantity: 50,
      date: '2024-01-13',
      reference: 'PO-2024-003',
      user: 'Mike Johnson',
    },
  ];

  const stats = [
    { title: 'Total Products', value: '1,234', change: '+12', icon: Package },
    { title: 'Low Stock Items', value: '23', change: '+3', icon: AlertTriangle },
    { title: 'Out of Stock', value: '5', change: '-2', icon: TrendingDown },
    { title: 'Total Value', value: '$45,231', change: '+$2,450', icon: DollarSign },
  ];

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock === 0) return { status: 'out-of-stock', color: 'bg-red-100 text-red-800' };
    if (stock <= minStock) return { status: 'low-stock', color: 'bg-yellow-100 text-yellow-800' };
    return { status: 'in-stock', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Track stock levels, manage products, and monitor warehouse operations</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Enter product information to add to inventory.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <Input placeholder="Enter product name" />
                </div>
                <div>
                  <label className="text-sm font-medium">SKU</label>
                  <Input placeholder="Enter SKU" />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Initial Stock</label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Min Stock Level</label>
                    <Input type="number" placeholder="0" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <Input placeholder="$0.00" />
                </div>
                <div>
                  <label className="text-sm font-medium">Supplier</label>
                  <Input placeholder="Enter supplier name" />
                </div>
                <Button className="w-full">Add Product</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600">{stat.change} from last month</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory</CardTitle>
              <CardDescription>
                Manage product stock levels and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => {
                    const stockStatus = getStockStatus(product.stock, product.minStock);
                    return (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{product.stock}</span>
                            <span className="text-sm text-gray-500">/ {product.minStock} min</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={stockStatus.color}>
                            {stockStatus.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{product.price}</TableCell>
                        <TableCell>{product.supplier}</TableCell>
                        <TableCell>{product.lastUpdated}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Transactions</CardTitle>
              <CardDescription>
                Track all incoming and outgoing stock movements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <Badge
                          variant={transaction.type === 'in' ? 'default' : 'secondary'}
                          className={transaction.type === 'in' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                        >
                          {transaction.type === 'in' ? 'In' : 'Out'}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{transaction.product}</TableCell>
                      <TableCell>{transaction.quantity}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="font-mono text-sm">{transaction.reference}</TableCell>
                      <TableCell>{transaction.user}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Management</CardTitle>
              <CardDescription>
                Manage supplier information and relationships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'TechCorp Inc.', contact: 'John Smith', email: 'john@techcorp.com', phone: '+1 (555) 123-4567', products: 45 },
                  { name: 'AccessoryPro', contact: 'Sarah Johnson', email: 'sarah@accessorypro.com', phone: '+1 (555) 987-6543', products: 23 },
                  { name: 'FurnitureCo', contact: 'Mike Davis', email: 'mike@furnitureco.com', phone: '+1 (555) 456-7890', products: 12 },
                ].map((supplier, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{supplier.name}</CardTitle>
                      <CardDescription>{supplier.contact}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-500">Email:</span> {supplier.email}
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Phone:</span> {supplier.phone}
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500">Products:</span> {supplier.products}
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Reports</CardTitle>
              <CardDescription>
                Generate and view inventory reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Stock Levels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">View current stock levels and low stock alerts</p>
                    <Button variant="outline" size="sm">Generate Report</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Movement History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">Track stock movements over time</p>
                    <Button variant="outline" size="sm">Generate Report</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5" />
                      Value Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">Calculate total inventory value</p>
                    <Button variant="outline" size="sm">Generate Report</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InventoryManagementPage; 