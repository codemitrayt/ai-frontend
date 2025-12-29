import { Shield, SquarePen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const roles = [
  {
    title: 'Admin',
    desc: 'Full access to all resources',
    perms: ['read', 'write', 'delete', 'manage users', 'manage apps'],
  },
  {
    title: 'Editor',
    desc: 'Can read and modify data',
    perms: ['read', 'write'],
  },
  {
    title: 'Viewer',
    desc: 'Read-only access',
    perms: ['read'],
  },
  {
    title: 'Analyst',
    desc: 'Can read and query data',
    perms: ['read', 'query'],
  },
  {
    title: 'Data Engineer',
    desc: 'Can manage data sources and pipelines',
    perms: ['read', 'write', 'manage sources'],
  },
]

export default function RolesCard() {
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <Card key={role.title}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex gap-2">
                  <Shield className="w-6 h-6 text-emerald-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold leading-tight">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {role.desc}
                    </p>
                  </div>
                </div>
                <SquarePen className="w-4 h-4 text-muted-foreground cursor-pointer" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">Permissions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {role.perms.map((p) => (
                    <Badge
                      key={p}
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5"
                    >
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
