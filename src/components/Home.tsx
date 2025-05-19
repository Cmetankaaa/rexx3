import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="block">
      <button className="button" onClick={() => navigate('/form')}>
        FORM
      </button>
    </div>
  );
};

export default Home;