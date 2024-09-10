'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CharacterCounter() {
  const [text, setText] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text-input">Enter your text:</Label>
        <Input
          id="text-input"
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={handleInputChange}
        />
      </div>
      <p className="text-sm text-gray-500">
        Character count: <span className="font-semibold">{text.length}</span>
      </p>
    </div>
  )
}