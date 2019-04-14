import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function replace(routeName) {
  _navigator.dispatch(
    StackActions.replace({
      routeName
    })
  );
}

function setToRoot(routeName) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName })]
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  setToRoot,
  replace
};
