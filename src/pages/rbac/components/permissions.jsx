import { Card, CardContent } from '@/components/ui/card'
import { Eye, Pencil, Trash2, Database, Users, Settings } from 'lucide-react'

const permissionsData = [
  { title: 'Read', description: 'View data and applications', icon: Eye },
  { title: 'Write', description: 'Create and modify data', icon: Pencil },
  {
    title: 'Delete',
    description: 'Remove data and applications',
    icon: Trash2,
  },
  { title: 'Query', description: 'Execute custom queries', icon: Database },
  {
    title: 'Manage Users',
    description: 'Add/remove team members',
    icon: Users,
  },
  {
    title: 'Manage Apps',
    description: 'Create and configure applications',
    icon: Settings,
  },
  {
    title: 'Manage Sources',
    description: 'Configure data sources',
    icon: Database,
  },
]

export default function PermissionsCard() {
  return (
    <section>
      <Card className="bg-white border border-slate-200 ">
        <CardContent className="p-4 space-y-3">
          <div>
            <h2 className="text-lg font-semibold">Available Permissions</h2>
            <p className="text-sm text-slate-500">
              System permissions that can be assigned to roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {permissionsData.map((perm, index) => {
              const Icon = perm.icon
              return (
                <Card
                  key={index}
                  className="bg-white border border-slate-200 shadow-none"
                >
                  <CardContent className="flex items-start gap-3 p-3">
                    <div className="p-1.5 rounded-md ">
                      <Icon className="w-4 h-4 text-slate-600" />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-900">
                        {perm.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {perm.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
