import React from 'react'
import { ArrowLeft, Plus, Settings, Square, Bot } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import MarketPage from './market-place'
import DeployPage from './deploy'

const models = [
  {
    name: 'GPT-4 Turbo',
    accuracy: '94.2%',
    response: '1.2s',
    usage: 84,
    calls: '8.4K calls',
    cost: '$0.03/1K tokens',
    hardware: 'GPU: A100 40GB',
    lastUsed: '2 minutes ago',
  },
  {
    name: 'Claude 3 Opus',
    accuracy: '92.8%',
    response: '1.8s',
    usage: 45,
    calls: '3.2K calls',
    cost: '$0.015/1K tokens',
    hardware: 'GPU: V100 32GB',
    lastUsed: '15 minutes ago',
  },
  {
    name: 'CCustom Legal Model',
    accuracy: '91.5%',
    response: '2.1s',
    usage: 0,
    calls: '890 calls',
    cost: '$0.05/1K tokens',
    hardware: 'GPU: V100 32GB',
    lastUsed: ' 2 hours ago',
  },
]

const Stat = ({ label, value, color }) => (
  <div>
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className={`text-lg font-semibold ${color}`}>{value}</p>
  </div>
)

export default function ModelManagementPage() {
  return (
    <div className="p-3 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
          <div>
            <h1 className="text-2xl font-bold">Model Management</h1>
            <p className="text-sm text-muted-foreground">
              Deploy and manage your AI models
            </p>
          </div>
        </div>

        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Model
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="rounded-xl w-full justify-start">
          <TabsTrigger value="active">Active Models</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="deploy">Deploy New</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {models.map((model, i) => (
            <Card key={i} className="p-6 rounded-2xl">
              <div className="flex justify-between items-start">
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border">
                      <Bot />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{model.name}</h2>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary">LLM</Badge>
                        <Badge className="bg-black text-white">Running</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <Stat
                      label="Accuracy"
                      value={model.accuracy}
                      color="text-green-600"
                    />
                    <Stat
                      label="Response Time"
                      value={model.response}
                      color="text-blue-600"
                    />

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Usage
                      </p>
                      <Progress value={model.usage} />
                      <p className="text-sm mt-1 font-medium">{model.usage}%</p>
                    </div>

                    <Stat
                      label="Monthly Calls"
                      value={model.calls}
                      color="text-purple-600"
                    />
                    <Stat
                      label="Cost"
                      value={model.cost}
                      color="text-orange-600"
                    />
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground pt-2">
                    <p>{model.hardware}</p>
                    <p>Last used: {model.lastUsed}</p>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Square className="w-4 h-4 mr-2" />
                    Stop
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="marketplace">
          <MarketPage />
        </TabsContent>

        <TabsContent value="deploy">
          <DeployPage />
        </TabsContent>
      </Tabs>
    </div>
  )
}
