import { twMerge } from "tailwind-merge"

const HomeIcon = ({className}: {className?:string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={twMerge('', className)}
  >
    <path
      d="M5 19L5 10.595L12 5.25754L19 10.595V19L14 19V15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15V19H5Z" stroke="#5EFF81"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

export default HomeIcon