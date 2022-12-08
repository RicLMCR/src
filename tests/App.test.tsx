<<<<<<< HEAD
import App from "../App";
import renderer from "react-test-renderer";

describe("Tests that the app its self renders correctly", () => {
  it("App renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
=======
import App from '../App';
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

describe('Tests that the app its self renders correctly', () => {

  it(' App renders correctly', () => {
    render(<App />)
    //  .toJSON()
    // expect(tree).toMatchSnapshot()
  })
})
>>>>>>> e94590af27696d5f49242531a491a8365cd6e3e5
