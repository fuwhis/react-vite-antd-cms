import { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.less';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginParams } from '@/interface/user/login';
import { loginAsync } from '@/stores/user.store';
import { useDispatch } from 'react-redux';
import { formatSearch } from '@/utils/formatSearch';
import { LocaleFormatter, useLocale } from '@/locales';

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest',
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { formatMessage } = useLocale();

  const onFinished = async (form: LoginParams) => {
    const res = dispatch(await loginAsync(form));

    if (!!res) {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      navigate(from);
    }
  };

  return (
    <div className="login-page">
      <Form<LoginParams> onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'global.tips.enterUsernameMessage',
              }),
            },
          ]}
        >
          <Input
            placeholder={formatMessage({
              id: 'global.tips.username',
            })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'global.tips.enterPasswordMessage',
              }),
            },
          ]}
        >
          <Input
            type="password"
            placeholder={formatMessage({
              id: 'global.tips.password',
            })}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <LocaleFormatter id="global.tips.rememberUser" />
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            <LocaleFormatter id="global.tips.login" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
