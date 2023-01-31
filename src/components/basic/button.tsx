import { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd';

interface MyButtonProps extends ButtonProps {}

const BaseButton: FC<MyButtonProps> = props => {
  return <Button {...props} />;
};

const MyButton = Object.assign(Button, BaseButton);

export default MyButton;
