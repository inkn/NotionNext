import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return <footer className="relative w-full bg-black px-6 border-t">
         <i className='fas fa-copyright' /> 2023 <span> {title} 
        <br/>
        <span className='text-xs '>蜀ICP备2023006850号</span></span><br/>
    </footer>
}
