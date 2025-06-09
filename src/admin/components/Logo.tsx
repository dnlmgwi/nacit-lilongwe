import React from 'react'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div style={{ padding: '12px 0' }}>
      <Image
        src="/nacit-lilongwe-logo.svg"
        alt="Nacit Lilongwe Logo"
        width={340}
        height={154.19}
        style={{ display: 'block' }}
      />
    </div>
  )
}

export default Logo
