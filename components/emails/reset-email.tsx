import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface PasswordResetEmailProps {
  userName: string;
  resetUrl: string;
  requestTime: string;
}

const PasswordResetEmail = ({ userName, resetUrl, requestTime } : PasswordResetEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required within 1 hour</Preview>
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white rounded-xl shadow-sm max-w-150 mx-auto p-10">
            {/* Header */}
            <Section className="text-center mb-8">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-2">
                Password Reset Request
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-8">
              <Text className="text-[16px] text-gray-700 mb-4 m-0">
                Hi {userName || 'there'},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-4 m-0">
                Someone requested a password reset for your account associated with {userName}. If this was you, click the button below to reset your password.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-6 m-0">
                This password reset link will expire in 1 hour for security reasons.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-8">
              <Button
                href={resetUrl}
                className="bg-red-600 text-white font-semibold py-3 px-6 rounded-[6px] text-[16px] no-underline box-border inline-block"
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-8">
              <Text className="text-[14px] text-gray-600 mb-2 m-0">
                If the button above doesn&apos;t work, you can copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-red-600 break-all m-0">
                <Link href={resetUrl} className="text-red-600 underline">
                  {resetUrl}
                </Link>
              </Text>
            </Section>

            {/* Security Warning */}
            <Section className="bg-red-50 border-l-4 border-solid border-red-400 p-5 mb-8">
              <Text className="text-[14px] text-red-800 mb-2 m-0 font-semibold">
                Security Alert:
              </Text>
              <Text className="text-[14px] text-red-700 mb-3 m-0">
                If you didn&apos;t request this password reset, please ignore this email and your password will remain unchanged.
              </Text>
              <Text className="text-[14px] text-red-700 m-0">
                For your security, we recommend changing your password regularly and using a strong, unique password.
              </Text>
            </Section>

            {/* Additional Info */}
            <Section className="bg-gray-50 p-5 rounded-[6px] mb-8">
              <Text className="text-[14px] text-gray-700 mb-2 m-0 font-semibold">
                What happens next?
              </Text>
              <Text className="text-[14px] text-gray-600 mb-2 m-0">
                • Click the reset button to create a new password
              </Text>
              <Text className="text-[14px] text-gray-600 mb-2 m-0">
                • Choose a strong password with at least 8 characters
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                • You&apos;ll be automatically signed in after setting your new password
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-solid border-gray-200 pt-6">
              <Text className="text-[12px] text-gray-500 text-center mb-2 m-0">
                This email was sent to {userName}
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-2 m-0">
                © 2026 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                123 Business Street, Suite 100, City, State 12345 | 
                <Link href="#" className="text-gray-500 underline ml-1">
                  Contact Support
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;