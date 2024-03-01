import LoginForm from '../ui/login-form';
import ProfileInfo from '../ui/info/profile-info';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <ProfileInfo />
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
