import React from 'react'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div style={{ padding: '12px 0' }}>
      <Image
        src="/favicon-light.svg"
        alt="Earn Mwachangu Logo"
        width={48}
        height={48}
        style={{ display: 'block' }}
      />
    </div>
  )
}

export default Logo
