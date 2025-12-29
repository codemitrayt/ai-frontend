import React, { useState } from 'react'
import { Cpu, Zap } from 'lucide-react'

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

export default function DeployPage() {
  const [selectedGPU, setSelectedGPU] = useState('v100')

  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Cpu className="h-4 w-4" />
              Hardware Selection
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 p-2">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">GPU: A100 40GB</p>
                <p className="text-sm text-muted-foreground">
                  High-performance for large models
                </p>
              </div>

              <Button variant="outline" onClick={() => setSelectedGPU('a100')}>
                Select
              </Button>
            </div>

            <div
              className={`flex items-center justify-between rounded-lg border p-4 ${
                selectedGPU === 'v100' ? '' : 'border-border'
              }`}
            >
              <div>
                <p className="font-medium">GPU: V100 32GB</p>
                <p className="text-sm text-muted-foreground">
                  Cost-effective option
                </p>
              </div>

              <Button
                className="bg-black text-white hover:bg-black/90"
                onClick={() => setSelectedGPU('v100')}
              >
                Select
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Model Configuration</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Model Name</label>
              <Input placeholder="Enter model name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Model Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select model type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="large-language">
                    Large Language Model
                  </SelectItem>
                  <SelectItem value="embedding">Embedding Model</SelectItem>
                  <SelectItem value="custom ">Custom Model</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-black text-white hover:bg-black/90">
              <Zap className="mr-2 h-4 w-4" />
              Deploy Model
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
