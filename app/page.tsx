// app/page.tsx
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <LoginForm/>
    </div>
  );
};

export default Home;
