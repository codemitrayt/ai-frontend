import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  Eye,
  Code,
  BarChart3,
  Search,
  Filter,
  Table,
  Share2,
  PieChart,
} from 'lucide-react'

const LibraryItem = ({ icon, title, desc }) => (
  <div className="border rounded-xl p-3 hover:bg-muted cursor-pointer">
    <div className="flex gap-2 items-start">
      {icon}
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  </div>
)

export default function VisualBuilderPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 md:col-span-3">
          <CardHeader>
            <CardTitle className="font-bold">Component Library</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <LibraryItem
              icon={<BarChart3 className="w-4 h-4" />}
              title="Chart Component"
              desc="Visualize graph data with charts"
            />

            <LibraryItem
              icon={<Search className="w-4 h-4" />}
              title="Search Component"
              desc="Search through graph nodes"
            />

            <LibraryItem
              icon={<Filter className="w-4 h-4" />}
              title="Filter Component"
              desc="Filter and refine graph data"
            />

            <LibraryItem
              icon={<Table className="w-4 h-4" />}
              title="Table Component"
              desc="Display data in tabular format"
            />

            <LibraryItem
              icon={<Share2 className="w-4 h-4" />}
              title="Graph Visualization"
              desc="Interactive graph visualization"
            />

            <LibraryItem
              icon={<PieChart className="w-4 h-4" />}
              title="Analytics Widget"
              desc="Pre-built analytics components"
            />
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-6">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="font-bold">Design Canvas</CardTitle>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-1" /> Preview
              </Button>
              <Button variant="outline" size="sm">
                <Code className="w-4 h-4 mr-1" /> Code
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="h-[360px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-center text-muted-foreground">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-3">
                🎨
              </div>
              <p className="font-medium">
                Drag components here to build your application
              </p>
              <p className="text-sm">Or select a template to get started</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 md:col-span-3">
          <CardHeader>
            <CardTitle className="font-bold">Properties</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-semibold">Title</label>
              <Input placeholder="Component title" />
            </div>

            <div>
              <label className="text-sm font-semibold">Data Source</label>
              <Select>
                <SelectTrigger className=" w-60">
                  <SelectValue placeholder="Select source " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="graph">Graph DB</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="file">CSV File</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold">Graph Query</label>
              <Textarea rows={4} defaultValue="MATCH (n) RETURN n LIMIT 10" />
            </div>

            <Button className="w-full bg-black text-white">
              Apply Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
