import { RouteComponentProps } from "react-router-dom";
interface RouteParams {
  id?: string
}
 
export interface MyComponent extends RouteComponentProps<RouteParams> {
}
