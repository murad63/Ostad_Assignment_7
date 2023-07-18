
function Button({onClick,disabled,title}) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn btn-info">
      {title}
    </button>
  )
}

export default Button