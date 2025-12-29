import React from 'react'
import {
  Plus,
  Users,
  Search,
  Database,
  Lock,
  CircleCheckBig,
  AlertCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import AccessCard from './access'
import BulkAccessCard from './bulk'

const teams = [
  'Analytics Team',
  'Product Team',
  'Operations Team',
  'Engineering Team',
  'Data Science Team',
]

const dataSources = [
  {
    id: 1,
    name: 'Production PostgreSQL',
    type: 'Database',
    status: 'connected',
    access: {
      'Analytics Team': { role: 'Analyst', permissions: ['read', 'query'] },
    },
  },
  {
    id: 2,
    name: 'Salesforce CRM',
    type: 'CRM',
    status: 'connected',
    access: {
      'Product Team': {
        role: 'Editor',
        permissions: ['read', 'write', '+1'],
      },
    },
  },
  {
    id: 3,
    name: 'Orders API',
    type: 'API',
    status: 'connected',
    access: {
      'Operations Team': {
        role: 'Admin',
        permissions: ['read', 'write', '+2'],
      },
    },
  },
  {
    id: 4,
    name: 'Product CSV Files',
    type: 'File',
    status: 'connected',
    access: {
      'Data Science Team': {
        role: 'Analyst',
        permissions: ['read', 'write', '+1'],
      },
    },
  },
  {
    id: 5,
    name: 'MongoDB Logs',
    type: 'Database',
    status: 'connected',
    access: {},
  },
  {
    id: 6,
    name: 'S3 Documents',
    type: 'API',
    status: 'connected',
    access: {},
  },
]

const lockedSources = [
  'Production PostgreSQL',
  'Salesforce CRM',
  'S3 Documents',
]

export default function DataPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <section>
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-2xl font-bold">Data Access Control</h2>
            <p className="text-gray-500">
              Manage team access to data sources with granular permissions
            </p>
          </div>
          <Button className="bg-black text-white">
            <Plus className="w-4 h-4 mr-2" /> Add Access Rule
          </Button>
        </div>

        <Tabs defaultValue="access" className="mb-6">
          <TabsList className="bg-gray-100/50 p-1">
            <TabsTrigger value="access">Access Matrix</TabsTrigger>
            <TabsTrigger value="roles">Access Roles</TabsTrigger>
            <TabsTrigger value="management">Bulk Management</TabsTrigger>
          </TabsList>

          <TabsContent value="access">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h1 className="text-xl font-bold">Filters</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-medium">Search</label>
                    <div className="relative mt-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input className="pl-10" placeholder="Search sources" />
                    </div>
                  </div>

                  <div>
                    <Select defaultValue="all">
                      <label className="text-sm font-medium">
                        Filter by Source Type
                      </label>
                      <SelectTrigger className="w-full md-w-full">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="db">Database</SelectItem>
                        <SelectItem value="crm">CRM</SelectItem>
                        <SelectItem value="api">API</SelectItem>
                        <SelectItem value="file">File</SelectItem>
                        <SelectItem value="storage">Storage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Select defaultValue="all">
                      <label className="text-sm font-medium">
                        Filter by Team
                      </label>
                      <SelectTrigger className="w-full md-w-full">
                        <SelectValue placeholder="All Teams" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Teams</SelectItem>
                        {teams.map((team) => (
                          <SelectItem key={team} value={team}>
                            {team}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="py-2 px-6">
                <h1 className="text-xl font-bold">Team-Source Access Matrix</h1>
                <p className="text-sm text-gray-500">
                  Visual overview of which teams have access to which data
                  sources
                </p>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data Source</TableHead>
                    {teams.map((team) => (
                      <TableHead key={team} className="text-center text-xs">
                        <div className="flex flex-col items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{team}</span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {dataSources.map((source) => (
                    <TableRow key={source.id}>
                      <TableCell>
                        <div className="flex gap-3">
                          <div className="p-2  rounded-md">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="flex items-center gap-1 font-medium">
                              {source.name}
                              {lockedSources.includes(source.name) && (
                                <Lock className="w-3 h-3 text-red-400" />
                              )}
                            </p>
                            <div className="mt-1 flex gap-2">
                              <Badge className="bg-gray-100 text-gray-700">
                                {source.type}
                              </Badge>

                              <Badge>{source.status}</Badge>
                            </div>
                          </div>
                        </div>
                      </TableCell>

                      {teams.map((team) => {
                        const access = source.access[team]
                        return (
                          <TableCell key={team} className="text-center">
                            {access ? (
                              <div className="flex flex-col items-center gap-1">
                                <CircleCheckBig className="text-green-500" />
                                <Badge className="rounded-full px-4 text-black bg-gray-100">
                                  {access.role}
                                </Badge>
                                <div className="flex gap-2">
                                  {access.permissions.map(
                                    (permission, index) => (
                                      <Badge
                                        key={index}
                                        className="rounded-full px-4 text-black bg-gray-100"
                                      >
                                        {permission}
                                      </Badge>
                                    )
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center text-gray-400">
                                <AlertCircle className="mx-auto" />
                                <span className="mt-1 text-xs">No Access</span>
                              </div>
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="roles">
            <AccessCard />
          </TabsContent>

          <TabsContent value="management">
            <BulkAccessCard />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
