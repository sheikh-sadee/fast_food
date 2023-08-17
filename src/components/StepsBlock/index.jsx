import * as React from 'react';

import { container } from '../../styles/common';
import { StepsContainer, StepHolder } from './StepsBlock.styles';

function StepsBlock() {
  return (
    <StepsContainer>
      <div className="container">
        <StepHolder>
          <li>
            <span className="counter">1</span>
            <span className="subtitle">
            Sign up & create your business profile
            </span>
          </li>
          <li>
            <span className="counter">2</span>
            <span className="subtitle">
            Launch unique campaigns for Plastk customers
            </span>
          </li>
          <li>
            <span className="counter">3</span>
            <span className="subtitle">
           Accelerate your business with increased sales
            </span>
          </li>
        </StepHolder>
      </div>
    </StepsContainer>
  );
}

export default StepsBlock;
