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

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({userName, verificationUrl,}: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white rounded-xl shadow-sm max-w-150 mx-auto p-10">
            {/* Header */}
            <Section className="text-center mb-8">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-2">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to our platform! Please confirm your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-8">
              <Text className="text-[16px] text-gray-700 mb-4 m-0">
                Hi {userName || 'there'},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-4 m-0">
                Thanks for signing up! To complete your account setup and ensure the security of your account, please verify your email address by clicking the button below.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-6 m-0">
                This verification link will expire in 24 hours for security reasons.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-8">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-[6px] text-[16px] no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-8">
              <Text className="text-[14px] text-gray-600 mb-2 m-0">
                If the button above doesn&apos;t work, you can copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                <Link href={verificationUrl} className="text-blue-600 underline">
                  {verificationUrl}
                </Link>
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 p-5 rounded-[6px] mb-8">
              <Text className="text-[14px] text-gray-700 mb-2 m-0 font-semibold">
                Security Notice:
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                If you didn&apos;t create an account with us, please ignore this email. Your email address will not be added to our system without verification.
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
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;