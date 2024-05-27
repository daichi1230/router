import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
        <h2>投稿が見つかりませんでした</h2>
        <p>
            <Link to='/'>ホームページに戻る</Link>
        </p>
    </main>
  )
}

export default Missing