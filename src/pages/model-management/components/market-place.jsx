import React from 'react'
import { Plus } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const models = [
  {
    name: 'GPT-4 Turbo',
    org: 'OpenAI',
    desc: 'Most capable GPT-4 model',
    price: '$0.03/1K tokens',
    type: 'LLM',
  },
  {
    name: 'Claude 3 Opus',
    org: 'Anthropic',
    desc: "Anthropic's most powerful model",
    price: '$0.015/1K tokens',
    type: 'LLM',
  },
  {
    name: 'Llama 2 70B',
    org: 'Meta',
    desc: 'Open source large language model',
    price: '$0.0007/1K tokens',
    type: 'LLM',
  },
  {
    name: 'text-embedding-ada-002',
    org: 'OpenAI',
    desc: 'High-quality embeddings',
    price: '$0.0001/1K tokens',
    type: 'Embedding',
  },
]

export default function MarketPage() {
  return (
    <div>
      <div className="mx-auto  px-1 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model) => (
            <Card
              key={model.name}
              className="rounded-2xl border border-muted shadow-sm"
            >
              <CardContent className="  flex flex-col  justify-between">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">{model.org}</p>
                  </div>

                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-0.5 text-xs"
                  >
                    {model.type}
                  </Badge>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {model.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">{model.price}</span>

                  <Button
                    size="sm"
                    className="rounded-full bg-black text-white hover:bg-black/90"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Deploy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
