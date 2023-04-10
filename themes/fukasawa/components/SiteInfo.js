import BLOG from '@/blog.config'

function SiteInfo ({ title }) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
        <footer
            className='relative leading-6 justify-start w-full text-gray-400 text-xs font-sans'
        >
     <i className='fas fa-copyright' /> 2023 <span> {title} 
        <br/>
        <span className='text-xs '><a href="https://beian.miit.gov.cn">蜀ICP备2023006850号</a></span></span><br/>
        </footer>
  )
}
export default SiteInfo
