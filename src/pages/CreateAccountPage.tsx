import { Button, TextInput, PasswordInput, Radio, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigationStore } from '../store/useNavigationStore';

interface CreateAccountFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  isAgency: string;
}

export const CreateAccountPage = () => {
  const { goToPage } = useNavigationStore();

  const form = useForm<CreateAccountFormValues>({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: '',
    },
    validate: {
      fullName: (value) => (value.trim().length < 2 ? 'Full name is required' : null),
      phoneNumber: (value) => (value.trim().length < 10 ? 'Valid phone number is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
      isAgency: (value) => (!value ? 'Please select an option' : null),
    },
  });

  const handleSubmit = (values: CreateAccountFormValues) => {
    console.log('Create account:', values);
    // Navigate to account settings or success page
    goToPage(4);
  };

  return (
    <div className="text-left">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create your PopX account
      </h1>
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
        <TextInput
          label={
            <>
              Full Name <span className="text-red-500">*</span>
            </>
          }
          placeholder="Enter full name"
          required
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('fullName')}
        />
        <TextInput
          label={
            <>
              Phone number <span className="text-red-500">*</span>
            </>
          }
          placeholder="Enter phone number"
          required
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('phoneNumber')}
        />
        <TextInput
          label={
            <>
              Email address <span className="text-red-500">*</span>
            </>
          }
          placeholder="Enter email"
          required
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label={
            <>
              Password <span className="text-red-500">*</span>
            </>
          }
          placeholder="Enter password"
          required
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('password')}
        />
        <TextInput
          label="Company name"
          placeholder="Enter company name"
          classNames={{
            label: 'text-sm font-semibold text-violet-700',
            input: 'mt-1',
          }}
          {...form.getInputProps('companyName')}
        />
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>
          <Radio.Group
            {...form.getInputProps('isAgency')}
          >
            <Group mt="xs" gap="lg">
              <Radio value="yes" label="Yes" />
              <Radio value="no" label="No" />
            </Group>
          </Radio.Group>
        </div>
        <Button
          type="submit"
          fullWidth
          size="lg"
          className="bg-violet-600 hover:bg-violet-700 font-semibold"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

