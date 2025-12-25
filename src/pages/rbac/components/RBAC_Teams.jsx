import React from 'react'
import { Plus, SquarePen, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import RolesCard from './role'
import PermissionsCard from './permissions'
import TeamRoleCard from './teamrole'

const teamsData = [
  {
    name: 'Analytics Team',
    lead: 'Sarah Johnson',
    members: 8,
    applications: 3,
  },
  {
    name: 'Product Team',
    lead: 'Mike Chen',
    members: 12,
    applications: 5,
  },
  {
    name: 'Operations Team',
    lead: 'Lisa Rodriguez',
    members: 6,
    applications: 2,
  },
  {
    name: 'Engineering Team',
    lead: 'David Kim',
    members: 15,
    applications: 7,
  },
  {
    name: 'Data Science Team',
    lead: 'Emma Wilson',
    members: 5,
    applications: 4,
  },
]

export default function RBACcard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">RBAC & Teams</h2>
          <p className="text-gray-500">
            Manage role-based access control and team assignments
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" /> Add Team
          </Button>
          <Button className="bg-black text-white">
            <Plus className="w-4 h-4 mr-2" /> Add Role
          </Button>
        </div>
      </div>

      <Tabs defaultValue="teams">
        <TabsList className="mb-6">
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="mapping">Team-Role Mapping</TabsTrigger>
        </TabsList>

        <TabsContent value="teams">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
            {teamsData.map((team, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg ">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>{team.name}</CardTitle>
                      <p className="text-sm text-gray-500">Lead: {team.lead}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <SquarePen className="w-4 h-4" />
                  </Button>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Members</span>
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                      {team.members}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Applications</span>
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                      {team.applications}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="roles">
          <RolesCard />{' '}
        </TabsContent>
        <TabsContent value="permissions">
          <PermissionsCard />{' '}
        </TabsContent>
        <TabsContent value="mapping">
          <TeamRoleCard />{' '}
        </TabsContent>
      </Tabs>
    </div>
  )
}
