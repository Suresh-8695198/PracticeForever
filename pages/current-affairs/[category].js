import CurrentAffairs from './index';

export async function getStaticPaths() {
  const paths = [
    { params: { category: 'daily' } },
    { params: { category: 'schemes' } },
    { params: { category: 'gk' } }
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      category: params.category
    }
  };
}

export default CurrentAffairs;
