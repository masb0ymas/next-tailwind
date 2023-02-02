import dummyData from '@src/data/dummy/picture.json'
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import AvatarGroup from '../AvatarGroup'

afterEach(cleanup)

describe('Test Avatar Group', () => {
  test('renders "no avatars" when there are no avatars', () => {
    const { getByText } = render(<AvatarGroup data={[]} />)

    expect(getByText(/no avatars/i)).toBeInTheDocument()
  })

  test('renders avatars', () => {
    const newData = dummyData.data

    const { getAllByTestId } = render(
      <AvatarGroup data={newData} limit={newData.length} />
    )

    const avatarAttr = getAllByTestId('avatar-image').map((x) =>
      x.getAttribute('alt')
    )

    const avatarLists = avatarAttr.map((name) => name)
    const avatarData = newData.map((row) => row.label)

    expect(avatarLists).toEqual(avatarData)
  })

  test('remaining avatar', () => {
    const newData = dummyData.data
    const limit = 4

    const remainingData = newData.slice(limit)
    const expectResult = `+${remainingData.length}`

    const { getByTestId } = render(<AvatarGroup data={newData} limit={limit} />)
    const avatarRemaining = getByTestId('remaining-avatar').textContent

    expect(expectResult).toEqual(avatarRemaining)
  })
})
