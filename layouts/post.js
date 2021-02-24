import Nav from '../components/nav'

export default function Post({ children, frontMatter }) {
  // React hooks, for example `useState` or `useEffect`, go here.
  console.log('frontMatter', frontMatter)
  return (
    <>
      <Nav />
      <div className="mx-auto my-10 prose">{children}</div>
    </>
  )
}