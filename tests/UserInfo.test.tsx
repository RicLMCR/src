import { render, screen } from "@testing-library/react";
import UserInfo from "../components/userInfo/UserInfo";


describe('tests that the UserInfo component exists and functions correctly', () => {

  test('renders UserInfo and checks for a h2 tag which says "Sign in"', () => {
    render(<UserInfo />);
    const h1Element = screen.getByText(/Sign in/);
    expect(h1Element).toBeInTheDocument();
  });
})
