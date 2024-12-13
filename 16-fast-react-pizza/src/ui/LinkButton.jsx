import { Link, useNavigate } from 'react-router-dom';


function LinkButton({children,to}) {
  const navigate = useNavigate();
  if(to === '-1') return <button onClick={() => navigate(-1)}>{children}</button>;
  const classNameStyles = 'text-sm text-blue-500 hover:text-blue-600 hover:underline m-4';
  return (
  <Link to={to} 
    className={classNameStyles}>
    &larr;
    {children}
  </Link>
  )
}

export default LinkButton;




