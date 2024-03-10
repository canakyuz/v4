import { GetServerSideProps } from 'next';
import Error from 'next/error';

interface Props {
 errorCode: number | false;
 stars: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
 try {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const errorCode = res.ok ? false : res.status;
  const json = await res.json();

  return {
   props: { errorCode, stars: json.stargazers_count },
  };
 } catch (error) {
  return {
   props: { errorCode: 500, stars: 0 }, // Bu durumda bir hata oluştu
  };
 }
};

const Page: React.FC<Props> = ({ errorCode, stars }) => {
 if (errorCode) {
  return <Error statusCode={errorCode} />;
 }

 return <div>Next stars: {stars}</div>;
};

export default Page;
