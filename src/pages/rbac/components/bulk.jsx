import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

export default function BulkAccessCard() {
  return (
    <div className=" max-w-7xl mx-auto">
      {' '}
      <Card className=" shadow-sm">
        {' '}
        <CardHeader>
          {' '}
          <CardTitle className="text-xl">Bulk Access Management</CardTitle>{' '}
          <CardDescription>
            {' '}
            Manage access permissions for multiple teams and sources at
            once{' '}
          </CardDescription>{' '}
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              Grant Access to Multiple Sources
            </h3>

            <div className="space-y-2">
              <label className="text-sm font-medium">Select Team</label>
              <Select>
                <SelectTrigger className="w-full md-w-full">
                  <SelectValue placeholder="Choose team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analytics">Analytics Team</SelectItem>
                  <SelectItem value="product">Product Team</SelectItem>
                  <SelectItem value="engineering">Engineering Team</SelectItem>
                  <SelectItem value="operations">Operations Team</SelectItem>
                  <SelectItem value="data">Data Science Team</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Select Role</label>
              <Select>
                <SelectTrigger className="w-full md-w-full">
                  <SelectValue placeholder="Choose role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Select Sources</label>
              {[
                'Salesforce CRM',
                'Orders API',
                'Product CSV Files',
                'MongoDB Logs',
                'S3 Documents',
              ].map((source) => (
                <div
                  key={source}
                  className="flex items-center justify-between border rounded-xl p-3"
                >
                  <span>{source}</span>
                  <Switch />
                </div>
              ))}
            </div>

            <Button className="w-full rounded-xl bg-black text-white hover:bg-black/90">
              Grant Bulk Access
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              Revoke Access from Multiple Teams
            </h3>

            <div className="space-y-2">
              <label className="text-sm font-medium">Select Source</label>
              <Select>
                <SelectTrigger className="w-full md-w-full">
                  <SelectValue placeholder="Choose source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="production">
                    Production PostgreSQL{' '}
                  </SelectItem>
                  <SelectItem value="crm">Salesforce CRM</SelectItem>
                  <SelectItem value="orders">Orders API</SelectItem>
                  <SelectItem value="product">Product CSV File</SelectItem>
                  <SelectItem value="mongodb">MongoDB Logs</SelectItem>
                  <SelectItem value="s3">S3 Documents </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">
                Select Teams to Revoke
              </label>
              {[
                'Analytics Team',
                'Product Team',
                'Operations Team',
                'Engineering Team',
                'Data Science Team',
              ].map((team) => (
                <div
                  key={team}
                  className="flex items-center justify-between border rounded-xl p-3"
                >
                  <span>{team}</span>
                  <Switch />
                </div>
              ))}
            </div>

            <Button className="w-full rounded-xl bg-red-500 hover:bg-red-600 text-white">
              Revoke Bulk Access
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
