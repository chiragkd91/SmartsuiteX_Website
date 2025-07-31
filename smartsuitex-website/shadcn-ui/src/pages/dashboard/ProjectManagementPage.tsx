import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
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
  Target,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  Flag,
  UserPlus,
  FileText,
  MessageSquare,
} from 'lucide-react';

const ProjectManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform Redesign',
      description: 'Complete redesign of the company e-commerce platform',
      status: 'in-progress',
      progress: 75,
      startDate: '2024-01-01',
      endDate: '2024-03-15',
      team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      priority: 'high',
      budget: '$50,000',
      spent: '$37,500',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'iOS and Android app for customer engagement',
      status: 'planning',
      progress: 25,
      startDate: '2024-02-01',
      endDate: '2024-06-30',
      team: ['Sarah Wilson', 'David Brown'],
      priority: 'medium',
      budget: '$80,000',
      spent: '$20,000',
    },
    {
      id: 3,
      name: 'API Integration Project',
      description: 'Integrate third-party APIs for payment processing',
      status: 'completed',
      progress: 100,
      startDate: '2023-12-01',
      endDate: '2024-01-31',
      team: ['Alex Chen', 'Emily Davis'],
      priority: 'high',
      budget: '$25,000',
      spent: '$25,000',
    },
  ];

  const tasks = [
    {
      id: 1,
      title: 'Design User Interface',
      project: 'E-commerce Platform Redesign',
      assignee: 'John Doe',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-02-15',
      progress: 80,
    },
    {
      id: 2,
      title: 'Implement Payment Gateway',
      project: 'E-commerce Platform Redesign',
      assignee: 'Jane Smith',
      status: 'todo',
      priority: 'high',
      dueDate: '2024-02-28',
      progress: 0,
    },
    {
      id: 3,
      title: 'Setup Development Environment',
      project: 'Mobile App Development',
      assignee: 'Sarah Wilson',
      status: 'completed',
      priority: 'medium',
      dueDate: '2024-02-10',
      progress: 100,
    },
  ];

  const stats = [
    { title: 'Active Projects', value: '8', change: '+2', icon: Target },
    { title: 'Completed Tasks', value: '156', change: '+12', icon: CheckCircle },
    { title: 'Team Members', value: '24', change: '+3', icon: Users },
    { title: 'Overdue Tasks', value: '3', change: '-2', icon: AlertCircle },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'on-hold': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
          <p className="text-gray-600">Track projects, manage tasks, and collaborate with your team</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Set up a new project with basic information.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Project Name</label>
                  <Input placeholder="Enter project name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Input placeholder="Project description" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Start Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">End Date</label>
                    <Input type="date" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Priority</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Create Project</Button>
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
                <p className="text-xs text-green-600">{stat.change} from last week</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>
                Overview of all projects and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Start Date</div>
                          <div className="font-medium">{project.startDate}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">End Date</div>
                          <div className="font-medium">{project.endDate}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Budget</div>
                          <div className="font-medium">{project.budget}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Spent</div>
                          <div className="font-medium">{project.spent}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-500 mb-2">Team</div>
                        <div className="flex -space-x-2">
                          {project.team.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="h-8 w-8 border-2 border-white">
                              <AvatarFallback>
                                {member.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.team.length > 3 && (
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium border-2 border-white">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority} priority
                        </Badge>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                Track individual tasks and their progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.title}</TableCell>
                      <TableCell>{task.project}</TableCell>
                      <TableCell>{task.assignee}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(task.status)}>
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={task.progress} className="w-20" />
                          <span className="text-sm">{task.progress}%</span>
                        </div>
                      </TableCell>
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

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Overview</CardTitle>
              <CardDescription>
                Manage team members and their project assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'John Doe', role: 'Project Manager', projects: 3, avatar: '/avatars/john.jpg' },
                  { name: 'Jane Smith', role: 'Developer', projects: 2, avatar: '/avatars/jane.jpg' },
                  { name: 'Mike Johnson', role: 'Designer', projects: 1, avatar: '/avatars/mike.jpg' },
                  { name: 'Sarah Wilson', role: 'Developer', projects: 2, avatar: '/avatars/sarah.jpg' },
                  { name: 'David Brown', role: 'QA Engineer', projects: 1, avatar: '/avatars/david.jpg' },
                  { name: 'Emily Davis', role: 'Product Manager', projects: 2, avatar: '/avatars/emily.jpg' },
                ].map((member, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <Avatar className="h-16 w-16 mx-auto mb-4">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                      <Badge variant="outline">{member.projects} projects</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectManagementPage; 