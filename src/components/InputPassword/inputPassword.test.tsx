import { render, screen, fireEvent } from '@testing-library/react-native';
import InputPassword from '@/components/InputPassword/InputPassword';

test('input password test', () => {
    render(<InputPassword />);

    fireEvent.press(screen.getByText('Show'));
    expect(screen.getByText('Hide')).toBeTruthy();

    expect(screen.getByTestId('input').props.secureTextEntry).toBe(false);

    fireEvent.press(screen.getByText('Hide'));
    expect(screen.getByText('Show')).toBeTruthy();


})