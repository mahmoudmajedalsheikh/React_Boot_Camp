import { Link } from "react-router-dom"


function Button({children,disabled,to}) {
  const className = 'bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 hover:bg-yellow-300 transition-colors duration-300 active:bg-slate-400 disabled:cursor-not-allowed  disabled:bg-slate-600'

  if(to) return <Link className={className}>{children}</Link>
  return (
    <button disabled={disabled}
    className={className}
    >{children}</button>
  )
}

export default Button
