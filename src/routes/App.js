import React from 'react';
import {connect} from 'dva';
import {IntlProvider} from 'react-intl';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import {ENGLISH} from '../utils/constant';
import {Spin} from 'antd'

const App = ({children, i18n, loading}) => {
  return (
    <Spin tip="loading..." spinning={loading.global} size="large">
      <div style={{height: '100vh'}}>
        <LocaleProvider locale={i18n.locale === ENGLISH ? enUS : null}>
          <IntlProvider locale={i18n.locale} messages={i18n.messages}>{children}</IntlProvider>
        </LocaleProvider>
      </div>
    </Spin>
  );
};

export default connect(state => state)(App)
