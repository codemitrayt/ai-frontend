import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

import { BarChart3, Search, Zap, Share2, Layers, Settings } from 'lucide-react'

const TemplateCard = ({ icon, title, desc, tag }) => {
  return (
    <Card className="border rounded-xl">
      <CardHeader className="flex flex-row gap-3 items-start">
        <div className="mt-1">{icon}</div>
        <div>
          <CardTitle className="font-bold text-base">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <Badge variant="secondary">{tag}</Badge>
        <Button className="bg-black text-white">Use Template</Button>
      </CardContent>
    </Card>
  )
}

export default function TemplatesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Tabs defaultValue="templates">
        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TemplateCard
              icon={<BarChart3 className="text-blue-500" />}
              title="Analytics Dashboard"
              desc="Interactive dashboard with charts and metrics"
              tag="Dashboard"
            />

            <TemplateCard
              icon={<Search className="text-green-500" />}
              title="Search Interface"
              desc="Graph-powered search with recommendations"
              tag="Search"
            />

            <TemplateCard
              icon={<Zap className="text-purple-500" />}
              title="API Gateway"
              desc="RESTful API for graph data access"
              tag="API"
            />

            <TemplateCard
              icon={<Share2 className="text-orange-500" />}
              title="Graph Explorer"
              desc="Interactive graph visualization tool"
              tag="Visualization"
            />

            <TemplateCard
              icon={<Layers className="text-red-500" />}
              title="Data Explorer"
              desc="Browse and filter graph data"
              tag="Explorer"
            />

            <TemplateCard
              icon={<Settings className="text-gray-600" />}
              title="Admin Panel"
              desc="Management interface for graph operations"
              tag="Admin"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
