import Button from '@/components/ui/Button/Button'
import React from 'react'

function page() {
  return (
    <div className="grid grid-cols-3">
      <Button id="button-1" type="button" size="small">Small Button</Button>
      <Button id="button-2" type="button" size="medium">Medium Button</Button>
      <Button id="button-3" type="button" size="large">Large Button</Button>
    </div>
  )
}

export default page