import * as React from 'react';

interface IHeaderMsgProps {
}

const HeaderMsg: React.FunctionComponent<IHeaderMsgProps> = (props) => {
  return (
    <p className="text-center bg-yellow-300 w-full text-xl font-semibold py-2">
      You don't have an account yet, please create a new account
    </p>
  )
};

export default HeaderMsg;
