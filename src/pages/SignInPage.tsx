import { Button, TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigationStore } from '../store/useNavigationStore';

interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const { goToPage } = useNavigationStore();

  const form = useForm<SignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  const handleSubmit = (values: SignInFormValues) => {
    console.log('Sign in:', values);
    // Navigate to success page after successful login
    goToPage(5);
  };

  return (
    <div className="text-left">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Signin to your PopX account
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
        <TextInput
          label="Email Address"
          placeholder="Enter email address"
          required
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          required
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('password')}
        />
        <Button
          type="submit"
          fullWidth
          size="lg"
          className="bg-violet-600 hover:bg-violet-700"
        >
          Login
        </Button>
      </form>
    </div>
  );
};


