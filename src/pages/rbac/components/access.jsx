import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Database, Users, Pencil, Trash2 } from 'lucide-react'

export default function AccessCard() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add New Access Rule</CardTitle>
          <p className="text-sm text-muted-foreground">
            Grant teams access to specific data sources with custom permissions
          </p>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Data Source</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="postgres">
                    Production PostgreSQL
                  </SelectItem>
                  <SelectItem value="crm">Salesforce CRM</SelectItem>
                  <SelectItem value="orders">Orders API</SelectItem>
                  <SelectItem value="product">Product CSV File</SelectItem>
                  <SelectItem value="mongodb">MongoDB Logs</SelectItem>
                  <SelectItem value="s3">S3 Documents </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Team</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analytics">Analytics Team</SelectItem>
                  <SelectItem value="product">Product Team</SelectItem>
                  <SelectItem value="engineering">Engineering Team</SelectItem>
                  <SelectItem value="data">Data Science Team</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Role</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Read', 'Write', 'Delete', 'Query', 'Export', 'Manage'].map(
              (perm) => (
                <div
                  key={perm}
                  className="flex items-center justify-between border rounded-lg px-4 py-2"
                >
                  <span className="text-sm">{perm}</span>
                  <Switch />
                </div>
              )
            )}
          </div>

          <Button>Add Access Rule</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Access Rules</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage existing team access permissions
          </p>
        </CardHeader>

        <CardContent className="space-y-3">
          {[
            {
              source: 'Production PostgreSQL',
              team: 'Analytics Team',
              role: 'Analyst',
              perms: ['read', 'query'],
            },
            {
              source: 'Salesforce CRM',
              team: 'Product Team',
              role: 'Editor',
              perms: ['read', 'write', 'export'],
            },
            {
              source: 'Orders API',
              team: 'Operations Team',
              role: 'Admin',
              perms: ['read', 'write', 'delete', 'manage'],
            },
            {
              source: 'Product CSV Files',
              team: 'Data Science Team',
              role: 'Analyst',
              perms: ['read', 'query', 'export'],
            },
          ].map((rule, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg "
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-medium">
                  <Database className="w-4 h-4 text-muted-foreground" />
                  {rule.source}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {rule.team} · {rule.role}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {rule.perms.map((p) => (
                    <Badge key={p} variant="secondary">
                      {p}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" size="icon">
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
