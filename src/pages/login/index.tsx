import { LoginParams } from '@/interface/user/login';
import { useLocale } from '@/locales';
import { loginAsync } from '@/stores/user.store';
import { formatSearch } from '@/utils/formatSearch';
import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.less';

// const initialValues: LoginParams = {
//   username: 'guest',
//   password: 'guest',
//   // remember: true,
// };

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { formatMessage } = useLocale();
  const [form] = Form.useForm();
  const [hiddenValidator, showValidator] = useState(false);

  const onFinished = async (form: LoginParams) => {
    const res = dispatch(await loginAsync(form));

    if (!!res) {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      showValidator(false);
      navigate(from);
    }
  };

  return (
    <div className="login-page">
      <Form<LoginParams>
        className="login-page-form"
        onFinish={onFinished}
        // initialValues={initialValues}
        requiredMark={false}
        labelCol={{ span: 3 }}
        validateMessages={validateMessages}
      >
        <h1>슈럽</h1>
        {/* email */}
        <Form.Item
          name="email"
          label="아이디"
          rules={[
            {
              required: true,
              type: 'email',
              message: formatMessage({
                id: 'global.tips.enterEmailMessage',
              }),
            },
          ]}
        >
          <Input
            className="login-page-form_input"
            bordered={true}
            placeholder={formatMessage({
              id: 'global.tips.username',
            })}
          />
        </Form.Item>
        {/* password */}
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'global.tips.enterPasswordMessage',
              }),
            },
          ]}
        >
          <Input.Password
            className="login-page-form_input"
            bordered={true}
            type="password"
            placeholder={formatMessage({
              id: 'global.tips.password',
            })}
          />
        </Form.Item>
        {hiddenValidator && (
          <div>
            <span className="login-page-form_validator">아이디와 비밀번호를 다시 확인해주세</span>
          </div>
        )}
        {/* button */}
        <Form.Item shouldUpdate>
          {() => (
            <Button
              htmlType="submit"
              className="login-page-form_button"
              disabled={
                !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              로그인
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
