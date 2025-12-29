import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Zap, Upload, Share2 } from 'lucide-react'

const HistoryItem = ({ title, desc, status, color }) => {
  return (
    <div className="flex items-center justify-between border rounded-xl p-4">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>

      <Badge
        className={
          color === 'green'
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-100 text-blue-700'
        }
      >
        {status}
      </Badge>
    </div>
  )
}

export default function DeploymentPage() {
  return (
    <div className=" max-w-7xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl">
            Deployment Configuration
          </CardTitle>
          <CardDescription>
            Configure deployment settings for your applications
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold ">
                Select Application
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analytics">
                    Customer Analytics Dashboard
                  </SelectItem>
                  <SelectItem value="search">
                    Product Search Interface
                  </SelectItem>
                  <SelectItem value="api">Knowledge Graph API</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ">Environment</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dev">Development</SelectItem>
                  <SelectItem value="prod">Production</SelectItem>
                  <SelectItem value="staging">Staging</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Custom Domain</label>
              <Input placeholder="app.yourdomain.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Auto Scaling</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select scaling" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="disabled">Disabled</SelectItem>
                  <SelectItem value="basic">Basic (1-3 instances)</SelectItem>
                  <SelectItem value="advanced">
                    Advanced (1-10 instances)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-black text-white">
              <Zap className="w-4 h-4 mr-2" />
              Deploy
            </Button>

            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Export Code
            </Button>

            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl">
            Deployment History
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <HistoryItem
            title="Customer Analytics Dashboard v1.2.0"
            desc="Deployed to production · 2 hours ago"
            status="Active"
            color="green"
          />

          <HistoryItem
            title="Product Search Interface v1.0.1"
            desc="Deployed to staging · 1 day ago"
            status="Staging"
            color="blue"
          />

          <HistoryItem
            title="Knowledge Graph API v2.1.0"
            desc="Deployed to production · 3 days ago"
            status="Active"
            color="green"
          />
        </CardContent>
      </Card>
    </div>
  )
}
