import { StyledHeader } from './style'
import { GiMagickTrick } from 'react-icons/gi'

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <GiMagickTrick className="header-icon" />
        <div className="header-nav">
          <button>About</button>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
