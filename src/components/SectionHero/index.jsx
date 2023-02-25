import { StyledSectionHero } from './style'
import rick from '../../assets/images/rick-and-morty.jpg'

const SectionHero = () => {
  return (
    <StyledSectionHero>
      <div className="img-contain">
        <div className="img">
          <img src={rick} alt="" />
        </div>
      </div>
    </StyledSectionHero>
  )
}

export default SectionHero
