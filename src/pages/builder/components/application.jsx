import React from 'react'
import { Plus, Eye, Pencil } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

import VisualBuilderPage from './visual'
import TemplatesPage from './template'
import DeploymentPage from './deploymen'

const applications = [
  {
    title: 'Customer Analytics Dashboard',
    desc: 'Interactive dashboard for customer insights',
    status: 'deployed',
    type: 'Dashboard',
    appId: 'app-001',
  },
  {
    title: 'Product Search Interface',
    desc: 'Graph-powered product search and recommendations',
    status: 'development',
    type: 'Search',
    appId: 'app-002',
  },
  {
    title: 'Knowledge Graph API',
    desc: 'RESTful API for graph queries',
    status: 'deployed',
    type: 'API',
    appId: 'app-003',
  },
]

const AppCard = ({ title, desc, status, type, appId }) => {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{desc}</CardDescription>
          </div>

          <Badge
            className={`capitalize ${
              status === 'deployed'
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Type:</span>
          <span className="px-3 py-0.5 rounded-full bg-gray-200">{type}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Base App:</span>
          <span>{appId}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Components:</span>
          <span>3</span>
        </div>

        <div className="flex gap-2 pt-3">
          <Button variant="outline" size="sm" className="w-40 gap-2">
            <Eye className="w-4 h-4" /> Preview
          </Button>
          <Button variant="outline" size="sm" className="w-40 gap-2">
            <Pencil className="w-4 h-4" /> Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ApplicationBuilderPage() {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Application Builder</h1>
          <p className="text-muted-foreground">
            Build applications on top of your knowledge graphs
          </p>
        </div>

        <Button className="bg-black text-white gap-2">
          <Plus className="w-4 h-4" /> New Application
        </Button>
      </div>

      <Tabs defaultValue="applications">
        <TabsList className="mb-6">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="visual">Visual Builder</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <AppCard
                key={index}
                title={app.title}
                desc={app.desc}
                status={app.status}
                type={app.type}
                appId={app.appId}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="visual">
          <VisualBuilderPage />
        </TabsContent>

        <TabsContent value="templates">
          <TemplatesPage />
        </TabsContent>

        <TabsContent value="deployment">
          <DeploymentPage />
        </TabsContent>
      </Tabs>
    </div>
  )
}
