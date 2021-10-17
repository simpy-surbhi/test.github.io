import { CssBaseline } from '@material-ui/core';
import { AppTheme } from 'App.theme';
import * as React from 'react';
import { Address } from './view/Address';

interface Props {}

interface State {
  error?: Error;
}

export default class App extends React.Component<Props, State> {
  /**
   * https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks
   *
   * componentDidCatch and getDerivedStateFromError: There are no Hook equivalents for these methods yet, but they will be added soon.
   */
  public static getDerivedStateFromError(error: Error) {
    return { error };
  }

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <AppTheme>
              {/* https://material-ui.com/style/css-baseline/ */}
              <CssBaseline />
              <Address />
      </AppTheme>
    );
  }
}
