import { useState } from 'react';
import { BoxWarning } from './Box/BoxWarning';
import { BoxHomeLogin } from './Box/BoxHomeLogin';
import { BoxDeletedUser } from './Box/BoxDeletedUser';

export interface stepType {
  BoxState: 'HomeLogin'|'Warning'|'DeletedUser';
}
export interface responseType {
  id: number,
  token: string
}

export const Container = () =>{
  const [step, setStep] = useState<stepType>({BoxState:'HomeLogin'});
  const [response, setResponse] = useState<responseType>({id:0,token:''});

  const {BoxState} = step;

  if(BoxState == 'HomeLogin'){
    return <BoxHomeLogin
      step={step}
      setStep={setStep}
      setResponse={setResponse}/>;
  }

  else if(BoxState == 'Warning'){
    return <BoxWarning
      step={step}
      setStep={setStep}
      response={response}
      setResponse={setResponse}
    />;
  }

  else if(BoxState == 'DeletedUser'){
    return <BoxDeletedUser/>;
  }
};