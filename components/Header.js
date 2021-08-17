import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header  className='flex flex-col items-center sm:flex-row justify-between m-5 h-auto'>
          <div className='flex flex-grow-1 justify-evenly max-w-2xl'>
              <HeaderItem title='HOME' Icon={HomeIcon}/>
              <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
              <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
              <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
              <HeaderItem title='SEARCH' Icon={SearchIcon}/>
              <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
          </div>
          <Image 
            className='object-contain' 
            src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png' 
            width={200} 
            height={100} 
            alt=''/>
        </header>
    )
}

export default Header;
