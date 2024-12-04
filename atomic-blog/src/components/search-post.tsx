function SearchPosts({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  )
}

export default SearchPosts
