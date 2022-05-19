import React, { cloneElement, FunctionComponent, ReactNode } from 'react';
import { Tooltip, TooltipProps } from 'react-tippy';

interface CustomTooltipProps extends TooltipProps {
  children: ReactNode;
}

const CustomTooltip: FunctionComponent<CustomTooltipProps> = (props) =>
  cloneElement(<Tooltip />, { ...props });

export default CustomTooltip;
