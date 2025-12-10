import HomeIcon from '@/components/icons/big/Home'
import HomeActiveIcon from '@/components/icons/big/HomeFilled'

import DiscoverIcon from '@/components/icons/big/Discover'
import DiscoverActiveIcon from '@/components/icons/big/DiscoverFilled'

import SearchIcon from '@/components/icons/big/Search'
import SearchActiveIcon from '@/components/icons/big/SearchFilled'

import LibraryIcon from '@/components/icons/big/Library'
import LibraryActiveIcon from '@/components/icons/big/LibraryFilled'

import ProfileIcon from '@/components/icons/big/User'
import ProfileActiveIcon from '@/components/icons/big/UserFilled'

export const bottomNavItems = [
  { label: 'Home', href: '/', inactive: HomeIcon, active: HomeActiveIcon },
  { label: 'Discover', href: '/discover', inactive: DiscoverIcon, active: DiscoverActiveIcon },
  { label: 'Search', href: '/search', inactive: SearchIcon, active: SearchActiveIcon },
  { label: 'Library', href: '/library', inactive: LibraryIcon, active: LibraryActiveIcon },
  { label: 'Profile', href: '/profile', inactive: ProfileIcon, active: ProfileActiveIcon },
] as const;
