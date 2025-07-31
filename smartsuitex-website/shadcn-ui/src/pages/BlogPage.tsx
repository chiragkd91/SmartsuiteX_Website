import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  Filter,
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Effective Project Management',
      excerpt: 'Learn the key strategies and best practices that successful project managers use to deliver projects on time and within budget.',
      content: 'Project management is a critical skill in today\'s fast-paced business environment...',
      author: 'Sarah Johnson',
      authorAvatar: '/avatars/sarah.jpg',
      category: 'Project Management',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      image: '/blog/project-management.jpg',
      tags: ['Project Management', 'Leadership', 'Productivity'],
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of CRM: AI-Powered Customer Relationships',
      excerpt: 'Discover how artificial intelligence is revolutionizing customer relationship management and what it means for your business.',
      content: 'Artificial intelligence is transforming the way businesses interact with their customers...',
      author: 'Mike Davis',
      authorAvatar: '/avatars/mike.jpg',
      category: 'CRM',
      publishDate: '2024-01-12',
      readTime: '7 min read',
      image: '/blog/ai-crm.jpg',
      tags: ['CRM', 'AI', 'Technology'],
      featured: false,
    },
    {
      id: 3,
      title: 'Inventory Management Best Practices for 2024',
      excerpt: 'Stay ahead of the competition with these proven inventory management strategies that will optimize your operations.',
      content: 'Effective inventory management is crucial for maintaining profitability and customer satisfaction...',
      author: 'Emily Wilson',
      authorAvatar: '/avatars/emily.jpg',
      category: 'Inventory',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      image: '/blog/inventory.jpg',
      tags: ['Inventory', 'Operations', 'Efficiency'],
      featured: false,
    },
    {
      id: 4,
      title: 'Building High-Performing Teams: A Complete Guide',
      excerpt: 'Learn the essential elements of team building and how to create a collaborative, productive work environment.',
      content: 'High-performing teams don\'t happen by accident. They require intentional effort and the right strategies...',
      author: 'David Brown',
      authorAvatar: '/avatars/david.jpg',
      category: 'Leadership',
      publishDate: '2024-01-08',
      readTime: '8 min read',
      image: '/blog/team-building.jpg',
      tags: ['Leadership', 'Team Building', 'HR'],
      featured: false,
    },
  ];

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'Project Management', count: 1 },
    { name: 'CRM', count: 1 },
    { name: 'Inventory', count: 1 },
    { name: 'Leadership', count: 1 },
    { name: 'Technology', count: 1 },
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest trends, tips, and insights in business management
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center">
                <div className="text-white">
                  <Badge className="mb-4 bg-white/20 text-white border-white/20">
                    Featured
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-lg mb-6 text-blue-100">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-blue-100 mb-6">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={featuredPost.authorAvatar} />
                        <AvatarFallback>{featuredPost.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                  </div>
                  <p className="text-sm">Featured post image</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter(post => !post.featured)
            .map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image</span>
                    </div>
                    <p className="text-xs">Blog image</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={post.authorAvatar} />
                        <AvatarFallback className="text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest insights and tips delivered to your inbox
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPage; 