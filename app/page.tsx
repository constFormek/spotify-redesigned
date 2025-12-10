export default function Home () {
  return (
    <div className=' flex flex-col items-center'>
      {Array.from({ length: 1000 }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  )
}
