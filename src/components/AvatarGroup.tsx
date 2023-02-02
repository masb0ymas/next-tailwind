/* eslint-disable @next/next/no-img-element */
import { AvatarEntity } from '@src/data/entities/picture'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarGroupProps {
  data: AvatarEntity[]
  limit?: number
  size?: AvatarSize | (string & {})
}

function AvatarGroup(props: AvatarGroupProps) {
  const { data, size, limit = 4 } = props

  const newData = data.slice(0, limit)
  const remainingData = data.slice(limit)

  let newSize = ''
  let newFontSize = ''

  switch (size) {
    case 'xs':
      newSize = 'h-10 w-10'
      newFontSize = 'text-md'
      break

    case 'sm':
      newSize = 'h-12 w-12'
      newFontSize = 'text-lg'
      break

    case 'md':
      newSize = 'h-14 w-14'
      newFontSize = 'text-xl'
      break

    case 'lg':
      newSize = 'h-16 w-16'
      newFontSize = 'text-2xl'
      break

    case 'xl':
      newSize = 'h-20 w-20'
      newFontSize = 'text-3xl'

      break

    default: // default case 'md'
      newSize = 'h-14 w-14'
      newFontSize = 'text-xl'
      break
  }

  if (!newData || !newData.length) {
    return <div>No Avatars</div>
  }

  return (
    <div className="flex justify-center -space-x-4 overflow-hidden">
      {newData &&
        newData.map((row) => {
          const uiAvatar = 'https://ui-avatars.com/api/?name='
          let newSource = row.source

          if (!row.source) {
            newSource = `${uiAvatar}${row.label}`
          }

          return (
            <img
              key={row.id}
              className={`inline-block ${newSize} rounded-full ring-2 ring-white`}
              src={newSource}
              alt={row.label}
              data-testid="avatar-image"
            />
          )
        })}

      {/* check remaining avatar */}
      {remainingData.length > 0 && (
        <div
          className={`relative inline-flex ${newSize} items-center justify-center overflow-hidden rounded-full bg-gray-200 ring-2 ring-white dark:bg-gray-200`}
        >
          <span
            className={`${newFontSize} font-medium text-gray-600 dark:text-gray-600`}
            data-testid="remaining-avatar"
          >
            {`+${remainingData.length}`}
          </span>
        </div>
      )}
    </div>
  )
}

export default AvatarGroup
