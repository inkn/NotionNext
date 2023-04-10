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

  return <footer className="z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ">
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> 2023 <span> {title} 
        <br/>
        <span className='text-xs '><a href="https://beian.miit.gov.cn">蜀ICP备2023006850号</a></span></span><br/>

    </footer>
}
