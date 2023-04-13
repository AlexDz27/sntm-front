function Toaster({ userMessage, isShown }) {
  return <div className={`toaster ${isShown ? 'show' : ''}`}>{userMessage}</div>
}

export { Toaster }