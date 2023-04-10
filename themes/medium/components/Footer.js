import React from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
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
      className='z-10 dark:bg-hexo-black-gray flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 relative'
    >
       <i className='fas fa-copyright' /> 2023 <span> {title} 
        <br/>
        <span className='text-xs '>蜀ICP备2023006850号</span></span><br/></footer>
  )
}

export default Footer
