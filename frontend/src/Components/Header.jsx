import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Button } from '../Styles/Styled';
import bgSvg from '../Styles/assets/illustrations/vector.svg';

const Header = () => {
  return (
    <StyledHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <StyledSvgContainer>
        <img src={bgSvg} alt='vector' />
      </StyledSvgContainer>
      <StyledTypography
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <StyledHeading>
          Telegramdaki ən
          <span> yaxşı </span>
          kanalları kəşf et!
        </StyledHeading>
        <h4>
          #1 Directory of The Best Telegram Channels, Groups, and Bots.
        </h4>
        <Button header type='button'>
          top 100 media
        </Button>
      </StyledTypography>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  background: no-repeat 50% center / contain
    url('../assets/illustrations/blob.svg');
`;

const StyledHeading = styled.h1`
  & h1 {
    & span {
      color: #d39e00;
      font-size: larger;
      font-weight: bold;
    }
  }
`;

const StyledTypography = styled(motion.div)`
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StyledSvgContainer = styled(motion.div)`
  flex: 1;

  & img {
    width: 70%;
  }
`;

export default Header;
