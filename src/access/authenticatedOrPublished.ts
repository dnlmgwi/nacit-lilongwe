import type { Access, PayloadRequest } from 'payload'

export const authenticatedOrPublished: Access = ({ req: { user } }: { req: PayloadRequest }) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
