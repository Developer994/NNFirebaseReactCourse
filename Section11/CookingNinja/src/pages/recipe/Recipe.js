import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import './Recipe.css';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export default function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && <h2>{recipe.title}</h2>}
    </div>
  );
}
