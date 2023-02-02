import AvatarGroup from '@src/components/AvatarGroup'
import dummyData from '@src/data/dummy/picture.json'
import { AvatarEntity } from '@src/data/entities/picture'

function Home() {
  const data: AvatarEntity[] = dummyData.data

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full space-y-8">
        <AvatarGroup data={data} size="xl" limit={3} />
      </div>
    </div>
  )
}

export default Home
