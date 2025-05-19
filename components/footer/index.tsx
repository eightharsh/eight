const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-gray-10 text-sm">
        Copyright © {new Date().getFullYear()}{' '}
        <a
          href="https://eightharsh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 transition-colors"
        >
          eightharsh.com
        </a>{' '}
        · Chase the Unthinkable 
      </div>
    </div>
  )
}

export { Footer }
