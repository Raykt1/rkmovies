import { Link } from "react-router-dom"

export const Footer = () => {
  return (
<div className="dark:bg-gray-900"  >
<footer className="bg-white rounded-lg shadow dark:bg-gray-900">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">ЯKmovies</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
       
        <li>
            <a href="https://www.facebook.com/Ray1S" target="_blank" className="mr-4 hover:underline md:mr-6">facebook</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/ravish-sahota-66b974277/" target="_blank" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://github.com/Raykt1" target="_blank" className="hover:underline">Github</a>
        </li>
    </ul>
    </div>
</footer></div>  

  )
}
