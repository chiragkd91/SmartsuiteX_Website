import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  Users,
  UserPlus,
  Search,
  Filter,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Building,
  DollarSign,
  Calendar,
  Target,
  TrendingUp,
  UserCheck,
  UserX,
} from 'lucide-react';

const CRMManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data
  const contacts = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@company.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc.',
      position: 'CEO',
      status: 'active',
      lastContact: '2024-01-15',
      avatar: '/avatars/john.jpg',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@innovate.com',
      phone: '+1 (555) 987-6543',
      company: 'Innovate Corp',
      position: 'Marketing Director',
      status: 'prospect',
      lastContact: '2024-01-10',
      avatar: '/avatars/sarah.jpg',
    },
    {
      id: 3,
      name: 'Mike Davis',
      email: 'mike.davis@startup.com',
      phone: '+1 (555) 456-7890',
      company: 'StartupXYZ',
      position: 'CTO',
      status: 'lead',
      lastContact: '2024-01-12',
      avatar: '/avatars/mike.jpg',
    },
  ];

  const leads = [
    {
      id: 1,
      name: 'Emily Wilson',
      company: 'GrowthTech',
      value: '$50,000',
      stage: 'Qualified',
      source: 'Website',
      assignedTo: 'John Doe',
      createdDate: '2024-01-10',
    },
    {
      id: 2,
      name: 'David Brown',
      company: 'ScaleUp Inc',
      value: '$75,000',
      stage: 'Proposal',
      source: 'Referral',
      assignedTo: 'Jane Smith',
      createdDate: '2024-01-08',
    },
  ];

  const deals = [
    {
      id: 1,
      name: 'Enterprise Software License',
      company: 'Tech Solutions Inc.',
      value: '$150,000',
      stage: 'Negotiation',
      probability: '75%',
      closeDate: '2024-02-15',
      owner: 'John Doe',
    },
    {
      id: 2,
      name: 'Consulting Services',
      company: 'Innovate Corp',
      value: '$85,000',
      stage: 'Proposal',
      probability: '60%',
      closeDate: '2024-02-28',
      owner: 'Jane Smith',
    },
  ];

  const stats = [
    { title: 'Total Contacts', value: '1,234', change: '+12%', icon: Users },
    { title: 'Active Leads', value: '89', change: '+8%', icon: Target },
    { title: 'Open Deals', value: '23', change: '+15%', icon: DollarSign },
    { title: 'Conversion Rate', value: '24%', change: '+3%', icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CRM Management</h1>
          <p className="text-gray-600">Manage your customer relationships, leads, and deals</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Contact</DialogTitle>
                <DialogDescription>
                  Enter the contact information below.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Company Name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Position</label>
                  <Input placeholder="Job Title" />
                </div>
                <Button className="w-full">Add Contact</Button>
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
      <Tabs defaultValue="contacts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Contacts</CardTitle>
              <CardDescription>
                Manage your customer contacts and their information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="prospect">Prospect</SelectItem>
                    <SelectItem value="lead">Lead</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={contact.avatar} />
                            <AvatarFallback>
                              {contact.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{contact.name}</div>
                            <div className="text-sm text-gray-500">{contact.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-gray-400" />
                          <span>{contact.company}</span>
                        </div>
                      </TableCell>
                      <TableCell>{contact.position}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            contact.status === 'active' ? 'default' :
                            contact.status === 'prospect' ? 'secondary' : 'outline'
                          }
                        >
                          {contact.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{contact.lastContact}</TableCell>
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

        <TabsContent value="leads" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Leads</CardTitle>
              <CardDescription>
                Track and manage your sales leads through the pipeline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.company}</TableCell>
                      <TableCell className="text-green-600 font-medium">{lead.value}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{lead.stage}</Badge>
                      </TableCell>
                      <TableCell>{lead.source}</TableCell>
                      <TableCell>{lead.assignedTo}</TableCell>
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

        <TabsContent value="deals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Deals</CardTitle>
              <CardDescription>
                Monitor your sales pipeline and deal progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deal</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Probability</TableHead>
                    <TableHead>Close Date</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deals.map((deal) => (
                    <TableRow key={deal.id}>
                      <TableCell className="font-medium">{deal.name}</TableCell>
                      <TableCell>{deal.company}</TableCell>
                      <TableCell className="text-green-600 font-medium">{deal.value}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{deal.stage}</Badge>
                      </TableCell>
                      <TableCell>{deal.probability}</TableCell>
                      <TableCell>{deal.closeDate}</TableCell>
                      <TableCell>{deal.owner}</TableCell>
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
      </Tabs>
    </div>
  );
};

export default CRMManagementPage; 