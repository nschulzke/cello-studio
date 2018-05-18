import * as React from 'react'
import NotFound from 'components/NotFound';
import { StaticContext, RouteComponentProps } from 'react-router';

function nestRoute(root: string, path: string): NestedRoute {
  const newPath = path.replace(new RegExp('^' + root), '');
  return {
    root,
    path: newPath
  }
}

type RCP = RouteComponentProps<any, StaticContext>;

interface NestedRoute {
  root?: string
  path?: string
}

class RouteComponent extends React.Component<NestedRoute> {
}

interface RouteEntry {
  component: React.ComponentClass<NestedRoute> | React.SFC<NestedRoute>
  path: string
  exact?: boolean
}

function getRoute(path: string, entries: RouteEntry[], defaultEl: JSX.Element = <NotFound />): JSX.Element {
  let component = defaultEl
  entries.forEach((entry) => {
    const pattern = '^' + entry.path + '\\/?';
    const exact = new RegExp(pattern + '$');
    const partial = new RegExp(pattern + '.*');
    if (component === defaultEl) {
      if ((!entry.exact && partial.test(path)) ||
        (entry.exact && exact.test(path))) {
        component = <entry.component {...nestRoute(entry.path, path)} />
      }
    }
  });
  return component;
}

export { RCP, RouteComponent, NestedRoute, getRoute };
