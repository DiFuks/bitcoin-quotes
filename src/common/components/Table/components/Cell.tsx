import { memo, TdHTMLAttributes } from 'react';
import SwitchTransition from 'react-transition-group/SwitchTransition';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';

import { usePrevious } from 'react-use';

import { themeSelector } from '@common/utils/themeSelector';

const duration = 300;
const transitionName = 'fade';

interface IProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  value: string | number;
}

interface IAnimatedColumnProps {
  isMore: boolean;
}

export const Cell = memo<IProps>(
  ({ children, value, ...props }) => {
    const previousValue = usePrevious(value) || 0;

    return (
      <td {...props}>
        <SwitchTransition>
          <CSSTransition
            key={String(value)}
            classNames={transitionName}
            timeout={duration}
          >
            <SAnimatedColumn isMore={value > previousValue}>
              {children}
            </SAnimatedColumn>
          </CSSTransition>
        </SwitchTransition>
      </td>
    );
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value,
);

const selectColor = ({ isMore }: IAnimatedColumnProps): string =>
  isMore ? '#0d9142' : '#bc2c2c';

const SAnimatedColumn = styled.div<{ isMore: boolean }>`
  &.${transitionName}-enter {
    color: ${selectColor};
  }
  &.${transitionName}-exit {
    color: ${themeSelector.color};
  }
  &.${transitionName}-enter-active {
    color: ${selectColor};
  }
  &.${transitionName}-exit-active {
    color: ${selectColor};
  }
  &.${transitionName}-enter-active, &.${transitionName}-exit-active {
    transition-property: color;
    transition-duration: ${duration}ms;
  }
`;
