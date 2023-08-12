const Form = ({setWord,getData}) => {
  return (
    <div>
      <form action="">
        <input type="text" 
        name='keyboard' 
        placeholder='e.g. cat'
        onChange={e => setWord(e.target.value)}></input>
        <button type='submit' onClick={getData}>Search</button>
      </form>
    </div>
  )
}

export default Form
