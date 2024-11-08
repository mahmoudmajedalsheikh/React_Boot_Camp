import { useSelector } from 'react-redux';

export default function UserName() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className=" text-sm font-semibold hidden md:block">{`${userName}`}</div>
  );
}
