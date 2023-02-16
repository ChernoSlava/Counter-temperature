import { CounterType } from "@components";
import { CounterStateType } from "@types";

export const getCounterContainerPropsSelector = (state: CounterStateType): { 
  value: number;
  type: string;
} => {

  let counter = state.value;
  let type: CounterType = 'zero';
    
  if ( counter < 0 && counter > - 10) {
      type = 'lesszero';
  } else if ( counter > 0 && counter < 10 ) {
      type = 'abovezero';
  } else if (counter >= 10 ) {
      type = 'aboveten';
  } else if (counter <= -10 ) {
      type = 'lessten';
  }

  return{
    value: counter,
    type
  }
};