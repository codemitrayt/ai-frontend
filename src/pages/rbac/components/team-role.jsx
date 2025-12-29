import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Trash2 } from 'lucide-react'

export default function TeamRoleCard() {
  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Team-Role Mapping</CardTitle>
          <p className="text-sm text-muted-foreground">
            Assign roles to teams for different applications
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Select Team</label>
              <Select>
                <SelectTrigger className="w-full md-w-full">
                  <SelectValue placeholder="Choose team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analytics">Analytics Team</SelectItem>
                  <SelectItem value="product">Product Team</SelectItem>
                  <SelectItem value="operations">Operations Team</SelectItem>
                  <SelectItem value="engineering">Engineering Team</SelectItem>
                  <SelectItem value="data">Data Science Team</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Select Role</label>
              <Select>
                <SelectTrigger className="w-full md-w-full">
                  <SelectValue placeholder="Choose role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="analyst">Analyst </SelectItem>
                  <SelectItem value="data">Data Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Select Application</label>
              <Select>
                <SelectTrigger className="w-full md-w-full">
                  <SelectValue placeholder="Choose app" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analytics-kg">
                    Customer Analytics KG
                  </SelectItem>
                  <SelectItem value="product-graph">
                    Product Catalog Graph
                  </SelectItem>
                  <SelectItem value="supply-chain">
                    Supply Chain Network
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="mt-2 w-fit">Assign Role</Button>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-lg">Current Assignments</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {[
            {
              team: 'Analytics Team',
              role: 'Admin',
              app: 'Customer Analytics KG',
            },
            {
              team: 'Product Team',
              role: 'Editor',
              app: 'Product Catalog Graph',
            },
            {
              team: 'Operations Team',
              role: 'Viewer',
              app: 'Supply Chain Network',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div>
                <p className="font-medium">
                  {item.team} → {item.role}
                </p>
                <p className="text-sm text-muted-foreground">{item.app}</p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
